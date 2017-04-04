import { Ghost, ChaseMode } from './ghost';
import { Sprite } from './assetLoader';
import { Direction } from './enums';
import State from './state';
import Vector2d from './vector2d';
import Maze from './maze';
import Entity from './entity';

export default class Blinky extends Ghost {

  getSpriteOffset(): number {
    return 0;
  }

  getGhost(state: State): Entity {
    const { blinky } = state;
    return blinky;
  }

  getTarget(mode: ChaseMode, state: State): Vector2d {
    const { player, blinky } = state;
    switch (mode) {
      case ChaseMode.Chase:
      case ChaseMode.Frightened:
        return player.position;
    }

    return blinky.position;
  }

}
