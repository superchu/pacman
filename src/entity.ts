import { Direction } from './enums';
import Vector2d from './vector2d';

export default class Entity {
  public get position(): Vector2d {
    return this._position;
  }

  public set position(value: Vector2d) {
    this._position = value;
  }

  public get target(): Vector2d {
    return this._target;
  }

  public set target(value: Vector2d) {
    this._target = value;
  }

  public get direction(): Direction {
    return this._direction;
  }

  public set direction(value: Direction) {
    this._direction = value;
  }

  private _nextDirection: Direction;
  public get nextDirection(): Direction {
    return this._nextDirection;
  }

  public set nextDirection(value: Direction) {
    this._nextDirection = value;
  }

  private _isDead: boolean = false;
  public get isDead(): boolean {
    return this._isDead;
  }

  public set isDead(value: boolean) {
    this._isDead = value;
  }

  constructor(private _position: Vector2d, private _target: Vector2d, private _direction: Direction)  {
    this._nextDirection = _direction;
  }
}
