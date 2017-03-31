import { Renderable } from './renderable';
import { Sprite } from './assetLoader';
import { Direction } from './enums';
import State from './state';
import Vector2d from './vector2d';
import Maze from './maze';
import Entity from './entity';

const TILE_SIZE = 32;
const TARGET_WHEN_DEAD = new Vector2d(13, 14);
const TARGET_OUTSIDE_HOUSE = new Vector2d(10, 11);

let tempTarget: Vector2d | null = null;

export enum ChaseMode {
  Chase,
  Scatter,
  Frightened
}

const moveGhost = (ghost: Entity, state: State): State => {
  const {
    position,
    target,
    direction,
    nextDirection
  } = ghost;

  let { x, y } = target;

  const maxX = Maze.maxX(state);
  const maxY = Maze.maxY(state);
  const isFrightened = state.hasPowerup;

  if (shouldUpdateTarget(state)) {
    const newDir = Maze.canMove(getNextPosition(state, nextDirection), state) && nextDirection !== direction;

    if (newDir) {
      ghost.direction = nextDirection;
    }

    switch (newDir ? nextDirection : direction) {
      case Direction.Right:
        x++;
        break;
      case Direction.Left:
        x--;
        break;
      case Direction.Down:
        y++;
        break;
      case Direction.Up:
        y--;
        break;
    }

    if (x < 0) {
      x = maxX;
    } else if (x > maxX) {
      x = 0;
    }

    if (y < 0) {
      y = maxY;
    } else if (y > maxY) {
      y = 0;
    }

    const newPos = new Vector2d(x, y);
    if (Maze.canMove(newPos, state)) {
      ghost.target = newPos;
    }
  } else {
    let { x, y } = position;
    const speed = isFrightened ? .5 : .5;
    switch (direction) {
      case Direction.Right:
        x += speed;
        break;
      case Direction.Left:
        x -= speed;
        break;
      case Direction.Down:
        y += speed;
        break;
      case Direction.Up:
        y -= speed;
        break;
    }

    if (x < 0) {
      x = maxX;
    } else if (x > maxX) {
      x = 0;
    }

    if (y < 0) {
      y = maxY;
    } else if (y > maxY) {
      y = 0;
    }

    ghost.position = new Vector2d(x, y);
  }

  return state;
};

const shouldUpdateTarget = (state: State): boolean => {
  const { blinky } = state;
  return Vector2d.isSame(blinky.position, blinky.target);
};

export const getNextPosition = (state: State, direction: Direction): Vector2d => {
  const { target } = state.blinky;
  let { x, y } = target;

  switch (direction) {
    case Direction.Right:
      x++;
      break;
    case Direction.Left:
      x--;
      break;
    case Direction.Down:
      y++;
      break;
    case Direction.Up:
      y--;
      break;
  }

  return new Vector2d(x, y);
};

const checkPosition = (ghost: Entity, state: State): void => {
  const { player, hasPowerup } = state;

  if (ghost.isDead) {
    if (ghost.position.x === TARGET_WHEN_DEAD.x && ghost.position.y === TARGET_WHEN_DEAD.y) {
      ghost.isDead = false;
      tempTarget = TARGET_OUTSIDE_HOUSE;
    }
  } else {
    if (tempTarget && ghost.position.x === tempTarget.x && ghost.position.y === tempTarget.y) {
      tempTarget = null;
    }

    if (player.position.x === ghost.position.x && player.position.y === ghost.position.y) {
      if (hasPowerup) {
        ghost.isDead = true;
      }
    }
  }
};

export abstract class Ghost implements Renderable {
  private target: Vector2d;
  private position: Vector2d;
  private frame: number = 0;
  private direction: Direction;
  private isDead: boolean = false;
  private isFrightened: boolean = false;
  private isFlashing: boolean = false;

  constructor(protected sprite: Sprite | undefined) {
  }

  protected abstract getSpriteOffset(): number;
  protected abstract getGhost(state: State): Entity;
  protected abstract getTarget(mode: ChaseMode, state: State): Vector2d;

  private getNextDirection(mode: ChaseMode, forceMove: boolean, shouldMakeDecision: boolean, canMoveInCurrentDirection: boolean, canMoveLeft: boolean, canMoveRight: boolean, canMoveUp: boolean, canMoveDown: boolean, isMovingX: boolean, isMovingY: boolean, state: State): Direction {
    const {
      player
    } = state;

    const ghost = this.getGhost(state);

    const {
      direction,
      position,
      isDead
    } = ghost;

    let nextDirection = direction;
    const isFrightened = mode === ChaseMode.Frightened;

    if (shouldMakeDecision) {
      const target = !isDead ? (tempTarget || this.getTarget(mode, state)) : TARGET_WHEN_DEAD;
      this.target = target;
      let options = [];

      if (canMoveInCurrentDirection) {
        options.push(direction);
      }

      if (isMovingX) {
        if (canMoveUp) {
          options.push(Direction.Up);
        }
        if (canMoveDown) {
          options.push(Direction.Down);
        }

        if (forceMove) {
          if (canMoveLeft && direction !== Direction.Left) {
            options.push(Direction.Left);
          }
          if (canMoveDown && direction !== Direction.Right) {
            options.push(Direction.Right);
          }
        }
      }

      if (isMovingY) {
        if (canMoveLeft) {
          options.push(Direction.Left);
        }
        if (canMoveRight) {
          options.push(Direction.Right);
        }

        if (forceMove) {
          if (canMoveUp && direction !== Direction.Up) {
            options.push(Direction.Up);
          }
          if (canMoveDown && direction !== Direction.Down) {
            options.push(Direction.Down);
          }
        }
      }

      let distance: number = 0;
      options.forEach(dir => {
        const { x, y } = getNextPosition(state, dir);
        const dx = target.x - x;
        const dy = target.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const isCloser = dist <= distance;
        const isFarther = dist >= distance;

        if (
          !distance ||
          (isFrightened ? isFarther : isCloser)
        ) {
          distance = dist;
          nextDirection = dir;
        }
      });
    }

    return nextDirection;
  }

  update(gameTime: number, state: State) {
    moveGhost(this.getGhost(state), state);

    const ghost = this.getGhost(state);
    const { position } = this;

    this.isDead = ghost.isDead;
    this.isFrightened = state.hasPowerup;
    this.isFlashing = state.powerupTimer < 20;

    if (position) {
      if (ghost.position.x !== position.x || ghost.position.y !== position.y) {
        this.frame++;
      }
    }

    this.position = ghost.position;
    this.direction = ghost.direction;

    this.updateDirection(ghost, state);
  }

  private updateDirection(ghost: Entity, state: State): void {
    const { direction } = ghost;
    const { isFrightened } = this;
    const forceMove = state.powerupTimer >= 50;
    const canMoveInCurrentDirection = Maze.canMove(getNextPosition(state, direction), state);
    const isMovingX = direction === Direction.Left || direction === Direction.Right;
    const isMovingY = direction === Direction.Up || direction === Direction.Down;
    const canMoveLeft = (forceMove || direction !== Direction.Right) && Maze.canMove(getNextPosition(state, Direction.Left), state);
    const canMoveRight = (forceMove || direction !== Direction.Left) && Maze.canMove(getNextPosition(state, Direction.Right), state);
    const canMoveUp = (forceMove || direction !== Direction.Down) && Maze.canMove(getNextPosition(state, Direction.Up), state);
    const canMoveDown = (forceMove || direction !== Direction.Up) && Maze.canMove(getNextPosition(state, Direction.Down), state);
    const canMoveX = (isMovingX && canMoveInCurrentDirection) || (!isMovingX && (canMoveLeft || canMoveRight));
    const canMoveY = (isMovingY && canMoveInCurrentDirection) || (!isMovingY && (canMoveUp || canMoveDown));

    const shouldMakeDecision =
      !canMoveInCurrentDirection ||
      (isMovingX && canMoveY) ||
      (isMovingY && canMoveX)
      ;

    const mode = isFrightened ? ChaseMode.Frightened : ChaseMode.Chase;

    ghost.nextDirection = this.getNextDirection(
      mode,
      forceMove,
      shouldMakeDecision,
      canMoveInCurrentDirection,
      canMoveLeft,
      canMoveRight,
      canMoveUp,
      canMoveDown,
      isMovingX,
      isMovingY,
      state
    );

    checkPosition(ghost, state);
  }

  private getFrame() {
    const {
      direction,
      isFrightened,
      isDead,
      isFlashing
    } = this;

    let anim = [0, 1];

    if (!isDead && isFrightened) {
      if (isFlashing) {
        anim = [0, 1, 2, 3];
      } else {
        anim = [0, 1];
      }
    } else {
      switch (direction) {
        case Direction.Right:
          anim = !isDead ? [0, 1] : [4];
          break;
        case Direction.Left:
          anim = !isDead ? [2, 3] : [5];
          break;
        case Direction.Up:
          anim = !isDead ? [4, 5] : [6];
          break;
        case Direction.Down:
          anim = !isDead ? [6, 7] : [7];
          break;
      }
    }

    return anim[this.frame % anim.length];
  }

  render(gameTime: number, ctx: CanvasRenderingContext2D) {
    const {
      isDead,
      isFrightened,
      position,
      sprite
    } = this;

    if (!sprite || !position) {
      return;
    }

    const { x, y } = position;

    let xPos = x * 16 - 8;
    let yPos = y * 16 - 8;

    ctx.save();
    ctx.translate(xPos, yPos);

    ctx.drawImage(
      sprite.sprite,
      TILE_SIZE * this.getFrame(),
      isDead || isFrightened ? TILE_SIZE * 4 : this.getSpriteOffset(),
      TILE_SIZE,
      TILE_SIZE,
      0,
      0,
      TILE_SIZE,
      TILE_SIZE
    );

    ctx.restore();

    // if (this.target) {
    //   ctx.fillStyle = 'rgba(0, 255, 0, .5)';
    //   ctx.fillRect(
    //     this.target.x * 16 - 8,
    //     this.target.y * 16 - 8,
    //     TILE_SIZE,
    //     TILE_SIZE
    //   );
    // }
  }
}