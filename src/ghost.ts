import { Renderable } from './renderable';
import { Sprite } from './assetLoader';
import { Direction } from './enums';
import { getNextPosition, moveEntity } from './entity';
import State from './state';
import Vector2d from './vector2d';
import Maze from './maze';
import Entity from './entity';

const TILE_SIZE = 32;
const TARGET_WHEN_DEAD = new Vector2d(13, 14);
const TARGET_OUTSIDE_HOUSE = new Vector2d(10, 11);
const GET_OUT_OF_HOUSE = [
  new Vector2d(13.5, 15),
  new Vector2d(13.5, 11)
];

let tempTarget: Vector2d | null = null;

export enum ChaseMode {
  Chase,
  Scatter,
  Frightened
}

const checkPosition = (ghost: Entity, state: State): void => {
  const { player, hasPowerup } = state;

  if (ghost.isDead) {
    if (Vector2d.isSame(ghost.position, TARGET_WHEN_DEAD)) {
      ghost.isDead = false;
      tempTarget = TARGET_OUTSIDE_HOUSE;
    }
  } else {
    if (tempTarget && Vector2d.isSame(ghost.position, tempTarget)) {
      tempTarget = null;
    }

    if (Vector2d.isSame(player.target, ghost.target)) {
      if (hasPowerup) {
        ghost.isDead = true;
        state.score += 200;
      } else {
        if (!player.isDead) {
          state.lives--;
        }
      }
    }
  }
};

export abstract class Ghost implements Renderable {
  public get name(): string {
    return 'ghost';
  }

  private target: Vector2d;
  private position: Vector2d;
  private frame: number = 0;
  private direction: Direction;
  private isDead: boolean = false;
  private isFrightened: boolean = false;
  private isFlashing: boolean = false;
  private isPlayerDead: boolean = false;

  private forcePath: Vector2d[] = [];

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
    const isFrightened = mode === ChaseMode.Frightened && !isDead;
    const isInGhostHouse = Maze.positionIsInsideGhostHouse(position);

    if (isInGhostHouse && !this.forcePath.length) {
      this.forcePath = [...GET_OUT_OF_HOUSE];
    }

    if (shouldMakeDecision) {
      let target: Vector2d;

      if (isDead) {
        target = TARGET_WHEN_DEAD;
      } else {
        if (this.forcePath.length && !Vector2d.isSame(position, this.forcePath[this.forcePath.length - 1])) {
          target = this.forcePath.shift() as Vector2d;
        } else {
          target = tempTarget || this.getTarget(mode, state);
        }
      }

      // const target = !isDead ? (tempTarget || this.getTarget(mode, state)) : TARGET_WHEN_DEAD;
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

      // Last resort bailout!
      if (!options.length) {
        options.push(Direction.Left);
        options.push(Direction.Right);
        options.push(Direction.Up);
        options.push(Direction.Down);
      }

      let distance: number = 0;
      options.forEach(dir => {
        const { x, y } = getNextPosition(dir, ghost.target);
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

    if (!isDead && !isInGhostHouse && Maze.positionIsInsideGhostHouse(getNextPosition(nextDirection, position))) {
      return direction;
    }

    return nextDirection;
  }

  private getSpeed() {
    const {
      isFrightened
    } = this;

    if (isFrightened) {
      return .2;
    }

    return .5;
  }

  update(gameTime: number, state: State) {
    const ghost = this.getGhost(state);
    this.isDead = ghost.isDead;
    this.isFrightened = state.hasPowerup && !this.isDead;
    this.isFlashing = state.powerupTimer < 20;

    moveEntity(this.getGhost(state), this.getSpeed(), state);

    const { position } = this;

    if (position) {
      if (ghost.position.x !== position.x || ghost.position.y !== position.y) {
        this.frame++;
      }
    }

    this.position = ghost.position;
    this.direction = ghost.direction;
    this.isPlayerDead = state.player.isDead;
    this.updateDirection(ghost, state);
  }

  private updateDirection(ghost: Entity, state: State): void {
    const { direction, target } = ghost;
    const { isFrightened } = this;
    const forceMove = state.powerupTimer >= 50;
    const canMoveInCurrentDirection = Maze.canMove(getNextPosition(direction, target), state);
    const isMovingX = direction === Direction.Left || direction === Direction.Right;
    const isMovingY = direction === Direction.Up || direction === Direction.Down;
    const canMoveLeft = (forceMove || direction !== Direction.Right) && Maze.canMove(getNextPosition(Direction.Left, target), state);
    const canMoveRight = (forceMove || direction !== Direction.Left) && Maze.canMove(getNextPosition(Direction.Right, target), state);
    const canMoveUp = (forceMove || direction !== Direction.Down) && Maze.canMove(getNextPosition(Direction.Up, target), state);
    const canMoveDown = (forceMove || direction !== Direction.Up) && Maze.canMove(getNextPosition(Direction.Down, target), state);
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
      isPlayerDead,
      position,
      sprite
    } = this;

    if (!sprite || !position || isPlayerDead) {
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
      isDead || isFrightened ? TILE_SIZE * 4 : TILE_SIZE * this.getSpriteOffset(),
      TILE_SIZE,
      TILE_SIZE,
      0,
      0,
      TILE_SIZE,
      TILE_SIZE
    );

    ctx.restore();

 }
}