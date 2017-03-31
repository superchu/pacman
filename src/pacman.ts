import { Renderable } from './renderable';
import { Sprite } from './assetLoader';
import { Direction } from './enums';
import State from './state';
import Vector2d from './vector2d';
import Maze from './maze';

const TILE_SIZE = 32;

const movePlayer = (state: State): State => {
  const { player } = state;
  const {
    position,
    target,
    direction,
    nextDirection
  } = player;

  let { x, y } = target;

  const maxX = Maze.maxX(state);
  const maxY = Maze.maxY(state);

  if (shouldUpdateTarget(state)) {

    const newDir = Maze.canMove(getNextPosition(state), state) && nextDirection !== direction;

    if (newDir) {
      player.direction = nextDirection;
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
      player.target = newPos;
    }
  } else {
    let { x, y } = position;
    switch (direction) {
      case Direction.Right:
        x += .5;
        break;
      case Direction.Left:
        x -= .5;
        break;
      case Direction.Down:
        y += .5;
        break;
      case Direction.Up:
        y -= .5;
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

    player.position = new Vector2d(x, y);
  }

  return state;
};

const shouldUpdateTarget = (state: State): boolean => {
  const { player } = state;
  return Vector2d.isSame(player.position, player.target);
};

const getNextPosition = (state: State): Vector2d => {
  const { nextDirection, target } = state.player;
  let { x, y } = target;

  switch (nextDirection) {
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

const checkPosition = (state: State): void => {
  const { position } = state.player;
  const tile = Maze.getTile(position, state);

  if (tile.isFood) {
    if (tile.isPowerup) {
      state.hasPowerup = true;
      state.score += 50;
    } else {
      state.score += 10;
    }

    state.updateMap(new Vector2d(tile.col, tile.row), 0);
  }
};

export default class PacMan implements Renderable {
  private position: Vector2d;
  private frame: number = 0;
  private direction: Direction;

  constructor(private sprite: Sprite | undefined) {
  }

  private getFrame() {
    const anim = {
      start: 0,
      end: 2
    };

    return Math.floor(anim.start + this.frame * .5 % (anim.end) + 1);
  }

  update(gameTime: number, state: State) {
    const { player } = movePlayer(state);
    const { position } = this;

    if (position) {
      if (player.position.x !== position.x || player.position.y !== position.y) {
        this.frame++;
      }
    }

    this.position = player.position;
    this.direction = player.direction;

    checkPosition(state);
  }

  render(gameTime: number, ctx: CanvasRenderingContext2D) {
    const { position, sprite } = this;

    if (!sprite || !position) {
      return;
    }

    const { x, y } = position;

    let xPos = x * 16 - 8;
    let yPos = y * 16 - 8;

    ctx.save();
    ctx.translate(xPos, yPos);

    let offsetX = 0;
    let offsetY = 0;

    switch (this.direction) {
      case Direction.Right:
        ctx.rotate(0);
        break;
      case Direction.Left:
        ctx.rotate(180 * (Math.PI / 180));
        offsetX = -32;
        offsetY = -32;
        break;
      case Direction.Down:
        ctx.rotate(90 * (Math.PI / 180));
        offsetY = -32;
        break;
      case Direction.Up:
        ctx.rotate(-90 * (Math.PI / 180));
        offsetX = -32;
        break;
    }

    ctx.drawImage(
      sprite.sprite,
      TILE_SIZE * this.getFrame(),
      0,
      TILE_SIZE,
      TILE_SIZE,
      offsetX,
      offsetY,
      TILE_SIZE,
      TILE_SIZE
    );

    ctx.restore();
  }
}
