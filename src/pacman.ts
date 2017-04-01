import { Renderable } from './renderable';
import { Sprite } from './assetLoader';
import { Direction } from './enums';
import { moveEntity } from './entity';
import State from './state';
import Vector2d from './vector2d';
import Maze from './maze';

const TILE_SIZE = 32;
const SPEED = .5;

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
    const { player } = state;
    const { position } = this;

    moveEntity(player, SPEED, state);

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
