/*
 * Pac-Man by Oscar Wallhult
 *
 */
import { GameState, Key, Direction } from './enums';
import { loadSprites } from './assetLoader';
import { Renderable } from './renderable';
import State from './state';
import Maze from './maze';
import Vector2d from './vector2d';
import PacMan from './pacman';
import Blinky from './blinky';
import Pinky from './pinky';
import TextRenderer, { Color, FontSize } from './text';

export default class Game {
  private readonly container: HTMLElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;

  private gameTime: number = 0;
  private gameState: GameState = GameState.Paused;
  private state: State = new State();
  private gameObjects: Renderable[] = [];
  private textRenderer: TextRenderer;

  constructor(selector: string, private width: number, private height: number) {
    this.container = document.querySelector(selector) as HTMLElement;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d')!;
    this.container.appendChild(this.canvas);

    this.reset();
    this.bindKeys();
    this.init();
  }

  private reset(): void {
    this.state.reset();
    this.gameState = GameState.Playing;
  }

  private bindKeys(): void {
    document.addEventListener('keydown', e => this.onKeyDown(e));
  }

  private onKeyDown(e: KeyboardEvent): void {
    const { state } = this;
    if (!state) {
      return;
    }

    const isPlaying = this.gameState === GameState.Playing;
    if (e.keyCode === Key.P) {
      if (isPlaying) {
        this.gameState = GameState.Paused;
      } else {
        this.gameState = GameState.Playing;
      }
    }

    if (this.gameState === GameState.Paused) {
      return;
    }

    const { player } = state;

    switch (e.keyCode) {
      case Key.Left:
        player.nextDirection = Direction.Left;
        break;
      case Key.Right:
        player.nextDirection = Direction.Right;
        break;
      case Key.Down:
        player.nextDirection = Direction.Down;
        break;
      case Key.Up:
        player.nextDirection = Direction.Up;
        break;
    }
  }

  private init(): void {
    loadSprites([
      'pacman',
      'sprites',
      'ghosts',
      'font'
    ])
      .then(sprites => {
        this.gameObjects.push(new Maze(sprites.find(s => s.name === 'sprites')));
        this.gameObjects.push(new PacMan(sprites.find(s => s.name === 'pacman')));
        this.gameObjects.push(new Blinky(sprites.find(s => s.name === 'ghosts')));
        this.gameObjects.push(new Pinky(sprites.find(s => s.name === 'ghosts')));
        this.textRenderer = new TextRenderer(sprites.find(s => s.name === 'font'));
        this.mainloop();
      });
  }

  private mainloop(): void {
    if (this.gameState === GameState.Playing) {
      this.gameTime++;
      this.update(this.gameTime);
    }
    this.render(this.gameTime, this.ctx);
    window.requestAnimationFrame(() => this.mainloop());
  }

  update(gameTime: number): void {
    if (gameTime % 2 === 0) {
      this.gameObjects.forEach(obj => obj.update(gameTime, this.state));
    }
  }

  private renderTitle(title: string, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(255, 255, 255, .9';
    ctx.fillRect(0, this.height / 2 - 30, this.width, 60);

    ctx.font = '20px sans-serif';
    ctx.fillStyle = '#555';
    const { width } = ctx.measureText(title);
    ctx.fillText(title, (this.width - width) / 2 , this.height / 2 + 6);
  }

  private renderText(text: string, size: FontSize, color: Color, position: Vector2d, ctx: CanvasRenderingContext2D) {
    const { textRenderer } = this;
    if (!textRenderer) {
      return;
    }

    this.textRenderer.renderText(text, size, color, position, ctx);
  }

  render(gameTime: number, ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, this.width, this.height);

    this.renderText(this.state.displayScore, FontSize.Normal, Color.White, new Vector2d(3, 1), ctx);

    ctx.save();
    ctx.translate(0, 40);

    this.gameObjects.forEach(obj => obj.render(gameTime, ctx));

    ctx.restore();

    switch (this.gameState) {
      case GameState.Ready:
        this.renderText('ready!', FontSize.Normal, Color.Yellow, new Vector2d(11, 19.5), ctx);
        break;
      case GameState.Paused:
        this.renderText('paused!', FontSize.Normal, Color.Yellow, new Vector2d(10.7, 19.5), ctx);
        break;
    }

  }
}
