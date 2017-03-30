import { Direction } from './enums';

export class Vector2d {
  constructor(private _x: number, private _y: number) {
  }

  public get x() {
    return this._x;
  }

  public get y() {
    return this._y;
  }
}

export default class State {
  private _map: number[][] = [];
  public get map() {
    return this._map;
  }

  private _playerPosition: Vector2d = new Vector2d(1, 1);
  public get playerPosition() {
    return this._playerPosition;
  }

  public set playerPosition(position: Vector2d) {
    this._playerPosition = position;
  }

  private _targetPosition: Vector2d = new Vector2d(1, 1);
  public get targetPosition() {
    return this._targetPosition;
  }

  public set targetPosition(position: Vector2d) {
    this._targetPosition = position;
  }

  public direction: Direction = Direction.Right;
  public nextDirection: Direction = Direction.Right;

  private _score: number = 0;
  public get score() {
    return this._score;
  }

  public set score(score: number) {
    this._score = score;
  }

  constructor() {
  }

  reset(): void {
    this.resetPlayer();
    this.resetMap();
  }

  private resetPlayer(): void {
    this._playerPosition = new Vector2d(1, 1);
    this._targetPosition = new Vector2d(1, 1);
    this._score = 0;
    this.direction = Direction.Right;
    this.nextDirection = Direction.Right;
  }

  updateMap(pos: Vector2d, tile: number): void {
    this._map[pos.y][pos.x] = tile;
  }

  resetMap(): void {
    this._map = [
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 17, 18, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
      [13, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 14],
      [13, 37, 7, 8, 8, 9, 37, 7, 8, 8, 8, 9, 37, 15, 16, 37, 7, 8, 8, 8, 9, 37, 7, 8, 8, 9, 37, 14],
      [13, 38, 15, 0, 0, 16, 37, 15, 0, 0, 0, 16, 37, 15, 16, 37, 15, 0, 0, 0, 16, 37, 15, 0, 0, 16, 38, 14],
      [13, 37, 10, 11, 11, 12, 37, 10, 11, 11, 11, 12, 37, 10, 12, 37, 10, 11, 11, 11, 12, 37, 10, 11, 11, 12, 37, 14],
      [13, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 14],
      [13, 37, 7, 8, 8, 9, 37, 7, 9, 37, 7, 8, 8, 8, 8, 8, 8, 9, 37, 7, 9, 37, 7, 8, 8, 9, 37, 14],
      [13, 37, 10, 11, 11, 12, 37, 15, 16, 37, 10, 11, 11, 21, 22, 11, 11, 12, 37, 15, 16, 37, 10, 11, 11, 12, 37, 14],
      [13, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 14],
      [4, 5, 5, 5, 5, 9, 37, 15, 24, 8, 8, 9, 0, 15, 16, 0, 7, 8, 8, 23, 16, 37, 7, 5, 5, 5, 5, 6],
      [0, 0, 0, 0, 0, 13, 37, 15, 22, 11, 11, 12, 0, 10, 12, 0, 10, 11, 11, 21, 16, 37, 14, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 25, 26, 26, 0, 0, 26, 26, 27, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 12, 37, 10, 12, 0, 31, 0, 0, 0, 0, 0, 0, 32, 0, 10, 12, 37, 10, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 37, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0],
      [5, 5, 5, 5, 5, 9, 37, 7, 9, 0, 31, 0, 0, 0, 0, 0, 0, 32, 0, 7, 9, 37, 7, 5, 5, 5, 5, 5],
      [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 28, 29, 29, 29, 29, 29, 29, 30, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 7, 8, 8, 8, 8, 8, 8, 9, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0],
      [1, 2, 2, 2, 2, 12, 37, 10, 12, 0, 10, 11, 11, 21, 22, 11, 11, 12, 0, 10, 12, 37, 10, 2, 2, 2, 2, 3],
      [13, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 14],
      [13, 37, 7, 8, 8, 9, 37, 7, 8, 8, 8, 9, 37, 15, 16, 37, 7, 8, 8, 8, 9, 37, 7, 8, 8, 9, 37, 14],
      [13, 37, 10, 11, 21, 16, 37, 10, 11, 11, 11, 12, 37, 10, 12, 37, 10, 11, 11, 11, 12, 37, 15, 22, 11, 12, 37, 14],
      [13, 38, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 37, 37, 0, 37, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 38, 14],
      [33, 8, 9, 37, 15, 16, 37, 7, 9, 37, 7, 8, 8, 8, 8, 8, 8, 9, 37, 7, 9, 37, 15, 16, 37, 7, 8, 34],
      [35, 11, 12, 37, 10, 12, 37, 15, 16, 37, 10, 11, 11, 21, 22, 11, 11, 12, 37, 15, 16, 37, 10, 12, 37, 10, 11, 36],
      [13, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 14],
      [13, 37, 7, 8, 8, 8, 8, 23, 24, 8, 8, 9, 37, 15, 16, 37, 7, 8, 8, 23, 24, 8, 8, 8, 8, 9, 37, 14],
      [13, 37, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 37, 10, 12, 37, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 37, 14],
      [13, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 14],
      [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6]
    ];
  }
}