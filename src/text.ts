import { Sprite } from './assetLoader';
import { TILE_SIZE } from './maze';
import Vector2d from './vector2d';
export enum Color {
  White,
  Yellow,
  Cyan
}

export enum FontSize {
  Small,
  Normal,
  Large
}

const BITMAP_WIDTH = 25;
const BITMAP_HEIGHT = 25;

const getChar = (char: string) => {
  switch (char.toUpperCase()) {
    case 'A':
      return {
        x: 0,
        y: 0
      };
    case 'B':
      return {
        x: 1,
        y: 0
      };
    case 'C':
      return {
        x: 2,
        y: 0
      };
    case 'D':
      return {
        x: 3,
        y: 0
      };
    case 'E':
      return {
        x: 4,
        y: 0
      };
    case 'F':
      return {
        x: 5,
        y: 0
      };
    case 'G':
      return {
        x: 6,
        y: 0
      };
    case 'H':
      return {
        x: 7,
        y: 0
      };
    case 'I':
      return {
        x: 8,
        y: 0
      };
    case 'J':
      return {
        x: 9,
        y: 0
      };
    case 'K':
      return {
        x: 10,
        y: 0
      };
    case 'L':
      return {
        x: 11,
        y: 0
      };
    case 'M':
      return {
        x: 12,
        y: 0
      };
    case 'N':
      return {
        x: 13,
        y: 0
      };
    case 'O':
      return {
        x: 14,
        y: 0
      };
    case 'P':
      return {
        x: 15,
        y: 0
      };
    case 'Q':
      return {
        x: 16,
        y: 0
      };
    case 'R':
      return {
        x: 17,
        y: 0
      };
    case 'S':
      return {
        x: 18,
        y: 0
      };
    case 'T':
      return {
        x: 19,
        y: 0
      };
    case 'U':
      return {
        x: 20,
        y: 0
      };
    case 'V':
      return {
        x: 21,
        y: 0
      };
    case 'W':
      return {
        x: 22,
        y: 0
      };
    case 'X':
      return {
        x: 23,
        y: 0
      };
    case 'Y':
      return {
        x: 24,
        y: 0
      };
    case 'Z':
      return {
        x: 25,
        y: 0
      };
    case '0':
      return {
        x: 0,
        y: 1
      };
    case '1':
      return {
        x: 1,
        y: 1
      };
    case '2':
      return {
        x: 2,
        y: 1
      };
    case '3':
      return {
        x: 3,
        y: 1
      };
    case '4':
      return {
        x: 4,
        y: 1
      };
    case '5':
      return {
        x: 5,
        y: 1
      };
    case '6':
      return {
        x: 6,
        y: 1
      };
    case '7':
      return {
        x: 7,
        y: 1
      };
    case '8':
      return {
        x: 8,
        y: 1
      };
    case '9':
      return {
        x: 9,
        y: 1
      };
    case '!':
      return {
        x: 10,
        y: 1
      };
    case '?':
      return {
        x: 11,
        y: 1
      };
    case '.':
      return {
        x: 12,
        y: 1
      };
    case ',':
      return {
        x: 13,
        y: 1
      };
    case '/':
      return {
        x: 14,
        y: 1
      };
    case '"':
      return {
        x: 15,
        y: 1
      };
    default:
      return {
        x: 25,
        y: 1
      };
  }
};

export default class TextRenderer {
  private bufferCanvas: HTMLCanvasElement;
  private bufferCtx: CanvasRenderingContext2D;

  constructor(protected sprite: Sprite | undefined) {
    this.bufferCanvas = document.createElement('canvas');
    this.bufferCtx = this.bufferCanvas.getContext('2d')!;
  }

  private getDimensions(size: FontSize) {
    return {
      width: 16,
      height: 16,
    };
  }

  private renderCharacter(char: string, size: FontSize, index: number, ctx: CanvasRenderingContext2D): void {
    const { sprite } = this;
    const { width, height } = this.getDimensions(size);
    const { x, y } = getChar(char);

    ctx.drawImage(
      sprite!.sprite,
      BITMAP_WIDTH * x,
      BITMAP_HEIGHT * y,
      BITMAP_WIDTH,
      BITMAP_HEIGHT,
      index * width,
      0,
      width,
      width,
    );
  }

  private getColor(color: Color): string {
    switch (color) {
      case Color.Cyan:
        return '#00ffff';
      case Color.Yellow:
        return '#ffff00';
      case Color.White:
      default:
        return '#fff';
    }
  }

  renderText(text: string, size: FontSize, color: Color, position: Vector2d, ctx: CanvasRenderingContext2D): void {
    const { bufferCanvas, bufferCtx, sprite } = this;

    if (!sprite) {
      return;
    }

    const { x, y } = position;
    ctx.save();
    ctx.translate(TILE_SIZE * x, TILE_SIZE * y);

    const { width, height } = this.getDimensions(size);

    const chars = text.split('');
    const bufferWidth = chars.length * width;

    bufferCtx.save();
    bufferCtx.clearRect(0, 0, bufferWidth, height);

    chars.forEach((char, index) => this.renderCharacter(char, size, index, bufferCtx));

    bufferCtx.fillStyle = this.getColor(color);
    bufferCtx.globalCompositeOperation = "source-in";
    bufferCtx.fillRect(0, 0, bufferWidth, height);

    bufferCtx.restore();

    ctx.drawImage(bufferCanvas, 0, 0);

    ctx.restore();
  }
}