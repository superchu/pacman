import { Renderable } from './renderable';
import { Sprite } from './assetLoader';
import { Direction } from './enums';
import { TILE_SIZE } from './pacman';
import State from './state';
import Vector2d from './vector2d';
import Maze from './maze';
import Entity from './entity';

export default class Lifebar implements Renderable {
  public get name(): string {
    return 'Lifebar';
  }

  private lives: number = 0;

  constructor(private sprite: Sprite | undefined) {
  }

  update(gameTime: number, state: State) {
    this.lives = state.lives;
  }

  render(gameTime: number, ctx: CanvasRenderingContext2D) {
    const { sprite, lives } = this;
    if (!sprite || !lives) {
      return;
    }

    ctx.save();
    ctx.translate(0, 500);

    for (let i = lives; i > 0; i--) {
      ctx.drawImage(
        sprite.sprite,
        TILE_SIZE * 1,
        0,
        TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE * i,
        0,
        TILE_SIZE,
        TILE_SIZE
      );
    }

    ctx.restore();
  }
}
