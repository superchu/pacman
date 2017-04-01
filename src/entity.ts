import { Direction } from './enums';
import Maze from './maze';
import State from './state';
import Vector2d from './vector2d';

export const moveEntity = (entity: Entity, speed: number, state: State): void => {
  const {
    position,
    target,
    direction,
    nextDirection
  } = entity;

  let { x, y } = target;

  const maxX = Maze.maxX(state);
  const maxY = Maze.maxY(state);

  if (shouldUpdateTarget(entity)) {
    const newDir = Maze.canMove(getNextPosition(nextDirection, target), state) && nextDirection !== direction;

    if (newDir) {
      entity.direction = nextDirection;
    }

    switch (newDir ? nextDirection : direction) {
      case Direction.Left:
        x--;
        break;
      case Direction.Right:
        x++;
        break;
      case Direction.Up:
        y--;
        break;
      case Direction.Down:
        y++;
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
    if (Maze.canMove(newPos, state)) {
      entity.target = newPos;
    }
  } else {
    let { x, y } = position;
    switch (direction) {
      case Direction.Left:
        x -= speed;
        x = Math.max(x, target.x);
        break;
      case Direction.Right:
        x += speed;
        x = Math.min(x, target.x);
        break;
      case Direction.Up:
        y -= speed;
        y = Math.max(y, target.y);
        break;
      case Direction.Down:
        y += speed;
        y = Math.min(y, target.y);
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

    entity.position = new Vector2d(x, y);
  }
};

const shouldUpdateTarget = (entity: Entity): boolean => {
  return Vector2d.isSame(entity.position, entity.target);
};

export const getNextPosition = (nextDirection: Direction, target: Vector2d): Vector2d => {
  let { x, y } = target;

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
};

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
