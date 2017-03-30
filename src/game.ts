/*
 * Pac-Man by Oscar Wallhult
 *
 */
import { GameState, Key, Direction } from './enums';
import { loadSprites } from './assetLoader';
import { Renderable } from './renderable';
import State, { Vector2d } from './state';
import Maze from './maze';
import PacMan from './pacman';

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

    switch (e.keyCode) {
      case Key.Left:
        state.nextDirection = Direction.Left;
        break;
      case Key.Right:
        state.nextDirection = Direction.Right;
        break;
      case Key.Down:
        state.nextDirection = Direction.Down;
        break;
      case Key.Up:
        state.nextDirection = Direction.Up;
        break;
    }
  }

  private init(): void {
    loadSprites([
      'pacman',
      'sprites'
    ])
      .then(sprites => {
        this.gameObjects.push(new Maze(sprites.find(s => s.name === 'sprites')));
        this.gameObjects.push(new PacMan(sprites.find(s => s.name === 'pacman')));
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
      this.movePlayer();
      this.checkPosition();
      this.gameObjects.forEach(obj => obj.update(gameTime, this.state));
    }
  }

  private movePlayer(): void {
    const {
      playerPosition,
      targetPosition,
      direction,
      nextDirection
    } = this.state;

    let { x, y } = targetPosition;

    const shouldUpdateTarget = this.shouldUpdateTarget();
    const maxX = Maze.maxX(this.state);
    const maxY = Maze.maxY(this.state);

    if (shouldUpdateTarget) {

      const newDir = Maze.canMove(this.getNextPosition(), this.state) && nextDirection !== direction;

      if (newDir) {
        this.state.direction = nextDirection;
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
      if (Maze.canMove(newPos, this.state)) {
        this.state.targetPosition = newPos;
      }
    } else {
      let { x, y } = playerPosition;
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

      this.state.playerPosition = new Vector2d(x, y);
    }
  }

  private shouldUpdateTarget(): boolean {
    const {
      targetPosition,
      playerPosition,
    } = this.state;

    return playerPosition.x === targetPosition.x && playerPosition.y === targetPosition.y;
  }

  private getNextPosition() {
    const { nextDirection, targetPosition } = this.state;
    let { x, y } = targetPosition;

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
  }

  private checkPosition(): void {
    const { playerPosition } = this.state;
    const tile = Maze.getTile(playerPosition, this.state);

    if (tile.isFood) {
      if (tile.isPowerup) {
        this.state.score += 50;
      } else {
        this.state.score += 10;
      }

      this.state.updateMap(new Vector2d(tile.col, tile.row), 0);
    }

  }

  render(gameTime: number, ctx: CanvasRenderingContext2D): void {
    console.log(`Score: ${this.state.score}`);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.save();
    ctx.translate(0, 40);

    this.gameObjects.forEach(obj => obj.render(gameTime, ctx));
    
    // const { x, y } = this.state.targetPosition;
    // ctx.fillStyle = 'rgba(255, 0, 0, .5)';
    // ctx.fillRect(
    //   x * 16 - 8,
    //   y * 16 - 8,
    //   32,
    //   32
    // );

    ctx.restore();
  }
}
