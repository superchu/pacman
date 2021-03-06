import { Direction } from './enums';
import Vector2d from './vector2d';
import Entity from './entity';

export default class State {
  private _map: number[][] = [];
  public get map() {
    return this._map;
  }

  private _player: Entity;
  public get player() {
    return this._player;
  }

  private _blinky: Entity;
  public get blinky() {
    return this._blinky;
  }

  private _pinky: Entity;
  public get pinky() {
    return this._pinky;
  }

  private _score: number = 0;
  public get score() {
    return this._score;
  }

  public set score(score: number) {
    this._score = score;
  }

  public get displayScore() {
    const score = this.score.toString();
    return `${'0000'.substr(0, 4 - score.length)}${score}`;
  }

  private _powerupTimer: number = 0;
  public get powerupTimer() {
    return this._powerupTimer;
  }

  public get hasPowerup(): boolean {
    if (this._powerupTimer > 0) {
      this._powerupTimer -= .4;
    }

    return this._powerupTimer > 0;
  }

  public set hasPowerup(value: boolean) {
    if (value) {
      this._powerupTimer = 100;
    } else {
      this._powerupTimer = 0;
    }
  }

  private _lives: number;
  public get lives() {
    return this._lives;
  }

  public set lives(value: number) {
    if (value >= 0) {
      this._lives = value;
    }
    this._player.isDead = true;
  }

  constructor() {
  }

  reset(): void {
    this.resetStage();
    this.resetMap();

    this._score = 0;
    this._lives = 3;
  }

  resetStage(): void {
    this.resetPlayer();
    this.resetGhosts();
    this.hasPowerup = false;
  }

  private resetPlayer(): void {
    this._player = new Entity(
      new Vector2d(13.5, 23),
      new Vector2d(14, 23),
      Direction.Right
    );
  }

  private resetGhosts(): void {
    this._blinky = new Entity(
      new Vector2d(13.5, 11),
      new Vector2d(12, 11),
      Direction.Left
    );

    this._pinky = new Entity(
      new Vector2d(13, 14),
      new Vector2d(13, 14),
      Direction.Up
    );
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
      [2, 2, 2, 2, 2, 12, 37, 10, 12, 0, 31, 39, 39, 0, 0, 39, 39, 32, 0, 10, 12, 37, 10, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 37, 0, 0, 0, 31, 39, 0, 0, 0, 0, 39, 32, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0],
      [5, 5, 5, 5, 5, 9, 37, 7, 9, 0, 31, 39, 39, 39, 39, 39, 39, 32, 0, 7, 9, 37, 7, 5, 5, 5, 5, 5],
      [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 28, 29, 29, 29, 29, 29, 29, 30, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 7, 8, 8, 8, 8, 8, 8, 9, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0],
      [1, 2, 2, 2, 2, 12, 37, 10, 12, 0, 10, 11, 11, 21, 22, 11, 11, 12, 0, 10, 12, 37, 10, 2, 2, 2, 2, 3],
      [13, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 14],
      [13, 37, 7, 8, 8, 9, 37, 7, 8, 8, 8, 9, 37, 15, 16, 37, 7, 8, 8, 8, 9, 37, 7, 8, 8, 9, 37, 14],
      [13, 37, 10, 11, 21, 16, 37, 10, 11, 11, 11, 12, 37, 10, 12, 37, 10, 11, 11, 11, 12, 37, 15, 22, 11, 12, 37, 14],
      [13, 38, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 37, 0, 0, 37, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 38, 14],
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