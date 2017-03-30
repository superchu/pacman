import State from './state';

export interface Renderable {
  update(gameTime: number, state: State): void;
  render(gameTime: number, ctx: CanvasRenderingContext2D): void;
}
