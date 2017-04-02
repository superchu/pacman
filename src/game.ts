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

export default class Game {
  private readonly container: HTMLElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;

  private gameTime: number = 0;
  private gameState: GameState = GameState.Paused;
  private state: State = new State();
  private gameObjects: Renderable[] = [];

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
      'ghosts'
    ])
      .then(sprites => {
        this.gameObjects.push(new Maze(sprites.find(s => s.name === 'sprites')));
        this.gameObjects.push(new PacMan(sprites.find(s => s.name === 'pacman')));
        this.gameObjects.push(new Blinky(sprites.find(s => s.name === 'ghosts')));
        this.gameObjects.push(new Pinky(sprites.find(s => s.name === 'ghosts')));
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

  render(gameTime: number, ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#fff';
    ctx.fillText(`${this.state.score}`, 15, 22);

    ctx.save();
    ctx.translate(0, 40);

    this.gameObjects.forEach(obj => obj.render(gameTime, ctx));

    ctx.restore();
  }
}
