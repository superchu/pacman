export default class Vector2d {
  constructor(private _x: number, private _y: number) {
  }

  public get x() {
    return this._x;
  }

  public get y() {
    return this._y;
  }

  public static isSame(a: Vector2d, b: Vector2d): boolean {
    return a.x === b.x && a.y === b.y;
  }
}