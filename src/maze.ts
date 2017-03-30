import { Renderable } from './renderable';
import { Sprite } from './assetLoader';
import State, { Vector2d } from './state';

const TILE_SIZE = 16;

export interface Tile {
  col: number;
  row: number;
  isFood: boolean;
  isWall: boolean;
  isPowerup?: boolean;
}

export interface TileType {
  x: number;
  y: number;
  isFood: boolean;
  isWall: boolean;
  isPowerup?: boolean;
}

const getTileType = (tile: number): TileType => {
  switch (tile) {
    case 1:
      return {
        x: 1,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 2:
      return {
        x: 2,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 3:
      return {
        x: 3,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 4:
      return {
        x: 4,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 5:
      return {
        x: 5,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 6:
      return {
        x: 6,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 7:
      return {
        x: 7,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 8:
      return {
        x: 8,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 9:
      return {
        x: 9,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 10:
      return {
        x: 10,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 11:
      return {
        x: 11,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 12:
      return {
        x: 12,
        y: 0,
        isWall: true,
        isFood: false
      };
    case 13:
      return {
        x: 0,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 14:
      return {
        x: 1,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 15:
      return {
        x: 2,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 16:
      return {
        x: 3,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 17:
      return {
        x: 4,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 18:
      return {
        x: 5,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 19:
      return {
        x: 6,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 20:
      return {
        x: 7,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 21:
      return {
        x: 8,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 22:
      return {
        x: 9,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 23:
      return {
        x: 10,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 24:
      return {
        x: 11,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 25:
      return {
        x: 12,
        y: 1,
        isWall: true,
        isFood: false
      };
    case 26:
      return {
        x: 0,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 27:
      return {
        x: 1,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 28:
      return {
        x: 2,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 29:
      return {
        x: 3,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 30:
      return {
        x: 4,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 31:
      return {
        x: 5,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 32:
      return {
        x: 6,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 33:
      return {
        x: 7,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 34:
      return {
        x: 8,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 35:
      return {
        x: 9,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 36:
      return {
        x: 10,
        y: 2,
        isWall: true,
        isFood: false
      };
    case 37:
      return {
        x: 11,
        y: 2,
        isWall: false,
        isFood: true
      };
    case 38:
      return {
        x: 12,
        y: 2,
        isWall: false,
        isFood: true,
        isPowerup: true
      };
    case 0:
    default:
      return {
        x: 0,
        y: 0,
        isWall: false,
        isFood: false
      };
  }
};

export default class Maze implements Renderable {

  static canMove(newPos: Vector2d, state: State): boolean {
    const { x, y } = newPos;
    const { map } = state;

    const col = Math.min(x, map[0].length - 1);
    const row = Math.min(y, map.length - 1);
    const tile = getTileType(map[row][col]);

    return !tile.isWall;
  }

  static getTile(position: Vector2d, state: State): Tile {
    const { x, y } = position;
    const { map } = state;
    const col = Math.floor(x);
    const row = Math.floor(y);
    const { isFood, isWall, isPowerup } = getTileType(map[row][col]);

    return {
      col,
      row,
      isFood,
      isWall,
      isPowerup
    };
  }

  static maxX(state: State): number {
    return state.map[0].length - 1;
  }

  static maxY(state: State): number {
    return state.map.length - 1;
  }

  private map: number[][] = [];

  constructor(private sprite: Sprite | undefined) {
  }

  update(gameTime: number, state: State) {
    this.map = state.map;
  }

  render(gameTime: number, ctx: CanvasRenderingContext2D) {
    const { map, sprite } = this;
    if (!sprite || !map) {
      return;
    }

    this.map.forEach((row: number[], y: number) => {
      row.forEach((column: number, x: number) => {
        const tile = getTileType(column);
        const shouldDraw = !tile.isPowerup || gameTime % 10 === 0;

        if (shouldDraw) {
          ctx.drawImage(
            sprite.sprite,
            tile.x * TILE_SIZE,
            tile.y * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE,
            x * TILE_SIZE,
            y * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE
          );
        }

      });
    });

  }
}
