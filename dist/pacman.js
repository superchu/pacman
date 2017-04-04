/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(33)('wks')
  , uid        = __webpack_require__(24)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(68);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(45)
  , toPrimitive    = __webpack_require__(35)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(1)
  , ctx       = __webpack_require__(17)
  , hide      = __webpack_require__(10)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(22);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(86)
  , defined = __webpack_require__(27);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var GameState = exports.GameState = undefined;
(function (GameState) {
    GameState[GameState["Ready"] = 0] = "Ready";
    GameState[GameState["Playing"] = 1] = "Playing";
    GameState[GameState["Paused"] = 2] = "Paused";
    GameState[GameState["GameOver"] = 3] = "GameOver";
})(GameState || (exports.GameState = GameState = {}));
var Key = exports.Key = undefined;
(function (Key) {
    Key[Key["Up"] = 38] = "Up";
    Key[Key["Down"] = 40] = "Down";
    Key[Key["Left"] = 37] = "Left";
    Key[Key["Right"] = 39] = "Right";
    Key[Key["Space"] = 32] = "Space";
    Key[Key["P"] = 80] = "P";
})(Key || (exports.Key = Key = {}));
var Direction = exports.Direction = undefined;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (exports.Direction = Direction = {}));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TILE_SIZE = undefined;

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TILE_SIZE = exports.TILE_SIZE = 16;
var getTileType = function getTileType(tile) {
    switch (tile) {
        case 1:
            return {
                x: 1,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 2:
            return {
                x: 2,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 3:
            return {
                x: 3,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 4:
            return {
                x: 4,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 5:
            return {
                x: 5,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 6:
            return {
                x: 6,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 7:
            return {
                x: 7,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 8:
            return {
                x: 8,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 9:
            return {
                x: 9,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 10:
            return {
                x: 10,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 11:
            return {
                x: 11,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 12:
            return {
                x: 12,
                y: 0,
                isWall: true,
                isFood: false
            };
        case 13:
            return {
                x: 0,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 14:
            return {
                x: 1,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 15:
            return {
                x: 2,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 16:
            return {
                x: 3,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 17:
            return {
                x: 4,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 18:
            return {
                x: 5,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 19:
            return {
                x: 6,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 20:
            return {
                x: 7,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 21:
            return {
                x: 8,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 22:
            return {
                x: 9,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 23:
            return {
                x: 10,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 24:
            return {
                x: 11,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 25:
            return {
                x: 12,
                y: 1,
                isWall: true,
                isFood: false
            };
        case 26:
            return {
                x: 0,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 27:
            return {
                x: 1,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 28:
            return {
                x: 2,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 29:
            return {
                x: 3,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 30:
            return {
                x: 4,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 31:
            return {
                x: 5,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 32:
            return {
                x: 6,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 33:
            return {
                x: 7,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 34:
            return {
                x: 8,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 35:
            return {
                x: 9,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 36:
            return {
                x: 10,
                y: 2,
                isWall: true,
                isFood: false
            };
        case 37:
            return {
                x: 11,
                y: 2,
                isWall: false,
                isFood: true
            };
        case 38:
            return {
                x: 12,
                y: 2,
                isWall: false,
                isFood: true,
                isPowerup: true
            };
        case 39:
            return {
                x: 0,
                y: 0,
                isWall: true,
                isFood: false,
                isPowerup: false
            };
        case 0:
        default:
            return {
                x: 0,
                y: 0,
                isWall: false,
                isFood: false
            };
    }
};

var Maze = function () {
    function Maze(sprite) {
        (0, _classCallCheck3.default)(this, Maze);

        this.sprite = sprite;
        this.map = [];
    }

    (0, _createClass3.default)(Maze, [{
        key: "update",
        value: function update(gameTime, state) {
            this.map = state.map;
        }
    }, {
        key: "render",
        value: function render(gameTime, ctx) {
            var map = this.map,
                sprite = this.sprite;

            if (!sprite || !map) {
                return;
            }
            this.map.forEach(function (row, y) {
                row.forEach(function (column, x) {
                    var tile = getTileType(column);
                    var shouldDraw = !tile.isPowerup || gameTime % 10 === 0;
                    if (shouldDraw) {
                        ctx.drawImage(sprite.sprite, tile.x * TILE_SIZE, tile.y * TILE_SIZE, TILE_SIZE, TILE_SIZE, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                    }
                });
            });
        }
    }], [{
        key: "positionIsInsideGhostHouse",
        value: function positionIsInsideGhostHouse(pos) {
            return pos.x >= 11 && pos.x <= 16 && pos.y >= 12 && pos.y <= 15;
        }
    }, {
        key: "canMove",
        value: function canMove(newPos, state) {
            var x = newPos.x,
                y = newPos.y;
            var map = state.map;

            var col = Math.min(x, map[0].length - 1);
            var row = Math.min(y, map.length - 1);
            var tile = getTileType(map[row][col]);
            return !tile.isWall;
        }
    }, {
        key: "getTile",
        value: function getTile(position, state) {
            var x = position.x,
                y = position.y;
            var map = state.map;

            var col = Math.floor(x);
            var row = Math.floor(y);

            var _getTileType = getTileType(map[row][col]),
                isFood = _getTileType.isFood,
                isWall = _getTileType.isWall,
                isPowerup = _getTileType.isPowerup;

            return {
                col: col,
                row: row,
                isFood: isFood,
                isWall: isWall,
                isPowerup: isPowerup
            };
        }
    }, {
        key: "maxX",
        value: function maxX(state) {
            return state.map[0].length - 1;
        }
    }, {
        key: "maxY",
        value: function maxY(state) {
            return state.map.length - 1;
        }
    }]);
    return Maze;
}();

exports.default = Maze;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vector2d = function () {
    function Vector2d(_x, _y) {
        (0, _classCallCheck3.default)(this, Vector2d);

        this._x = _x;
        this._y = _y;
    }

    (0, _createClass3.default)(Vector2d, [{
        key: "x",
        get: function get() {
            return this._x;
        }
    }, {
        key: "y",
        get: function get() {
            return this._y;
        }
    }], [{
        key: "isSame",
        value: function isSame(a, b) {
            return a.x === b.x && a.y === b.y;
        }
    }]);
    return Vector2d;
}();

exports.default = Vector2d;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(26);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(51)
  , enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(9)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNextPosition = exports.moveEntity = undefined;

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _enums = __webpack_require__(13);

var _maze = __webpack_require__(14);

var _maze2 = _interopRequireDefault(_maze);

var _vector2d = __webpack_require__(15);

var _vector2d2 = _interopRequireDefault(_vector2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveEntity = exports.moveEntity = function moveEntity(entity, speed, state) {
    var position = entity.position,
        target = entity.target,
        direction = entity.direction,
        nextDirection = entity.nextDirection;
    var x = target.x,
        y = target.y;

    var maxX = _maze2.default.maxX(state);
    var maxY = _maze2.default.maxY(state);
    if (shouldUpdateTarget(entity)) {
        var newDir = _maze2.default.canMove(getNextPosition(nextDirection, target), state) && nextDirection !== direction;
        if (newDir) {
            entity.direction = nextDirection;
        }
        switch (newDir ? nextDirection : direction) {
            case _enums.Direction.Left:
                x--;
                break;
            case _enums.Direction.Right:
                x++;
                break;
            case _enums.Direction.Up:
                y--;
                break;
            case _enums.Direction.Down:
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
        var newPos = new _vector2d2.default(x, y);
        if (_maze2.default.canMove(newPos, state)) {
            entity.target = newPos;
        }
    } else {
        var _x = position.x,
            _y = position.y;

        switch (direction) {
            case _enums.Direction.Left:
                _x -= speed;
                _x = Math.max(_x, target.x);
                break;
            case _enums.Direction.Right:
                _x += speed;
                _x = Math.min(_x, target.x);
                break;
            case _enums.Direction.Up:
                _y -= speed;
                _y = Math.max(_y, target.y);
                break;
            case _enums.Direction.Down:
                _y += speed;
                _y = Math.min(_y, target.y);
                break;
        }
        if (_x < 0) {
            _x = maxX;
        } else if (_x > maxX) {
            _x = 0;
        }
        if (_y < 0) {
            _y = maxY;
        } else if (_y > maxY) {
            _y = 0;
        }
        entity.position = new _vector2d2.default(_x, _y);
    }
};
var shouldUpdateTarget = function shouldUpdateTarget(entity) {
    return _vector2d2.default.isSame(entity.position, entity.target);
};
var getNextPosition = exports.getNextPosition = function getNextPosition(nextDirection, target) {
    var x = target.x,
        y = target.y;

    switch (nextDirection) {
        case _enums.Direction.Right:
            x++;
            break;
        case _enums.Direction.Left:
            x--;
            break;
        case _enums.Direction.Down:
            y++;
            break;
        case _enums.Direction.Up:
            y--;
            break;
    }
    return new _vector2d2.default(x, y);
};

var Entity = function () {
    function Entity(_position, _target, _direction) {
        (0, _classCallCheck3.default)(this, Entity);

        this._position = _position;
        this._target = _target;
        this._direction = _direction;
        this._isDead = false;
        this._nextDirection = _direction;
    }

    (0, _createClass3.default)(Entity, [{
        key: 'position',
        get: function get() {
            return this._position;
        },
        set: function set(value) {
            this._position = value;
        }
    }, {
        key: 'target',
        get: function get() {
            return this._target;
        },
        set: function set(value) {
            this._target = value;
        }
    }, {
        key: 'direction',
        get: function get() {
            return this._direction;
        },
        set: function set(value) {
            this._direction = value;
        }
    }, {
        key: 'nextDirection',
        get: function get() {
            return this._nextDirection;
        },
        set: function set(value) {
            this._nextDirection = value;
        }
    }, {
        key: 'isDead',
        get: function get() {
            return this._isDead;
        },
        set: function set(value) {
            this._isDead = value;
        }
    }]);
    return Entity;
}();

exports.default = Entity;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(96)
  , enumBugKeys = __webpack_require__(29)
  , IE_PROTO    = __webpack_require__(32)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(44).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys')
  , uid    = __webpack_require__(24);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(2)
  , core           = __webpack_require__(1)
  , LIBRARY        = __webpack_require__(20)
  , wksExt         = __webpack_require__(37)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ghost = exports.ChaseMode = undefined;

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _enums = __webpack_require__(13);

var _entity = __webpack_require__(25);

var _vector2d = __webpack_require__(15);

var _vector2d2 = _interopRequireDefault(_vector2d);

var _maze = __webpack_require__(14);

var _maze2 = _interopRequireDefault(_maze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TILE_SIZE = 32;
var TARGET_WHEN_DEAD = new _vector2d2.default(13, 14);
var TARGET_OUTSIDE_HOUSE = new _vector2d2.default(10, 11);
var GET_OUT_OF_HOUSE = [new _vector2d2.default(13.5, 15), new _vector2d2.default(13.5, 11)];
var tempTarget = null;
var ChaseMode = exports.ChaseMode = undefined;
(function (ChaseMode) {
    ChaseMode[ChaseMode["Chase"] = 0] = "Chase";
    ChaseMode[ChaseMode["Scatter"] = 1] = "Scatter";
    ChaseMode[ChaseMode["Frightened"] = 2] = "Frightened";
})(ChaseMode || (exports.ChaseMode = ChaseMode = {}));
var checkPosition = function checkPosition(ghost, state) {
    var player = state.player,
        hasPowerup = state.hasPowerup;

    if (ghost.isDead) {
        if (_vector2d2.default.isSame(ghost.position, TARGET_WHEN_DEAD)) {
            ghost.isDead = false;
            tempTarget = TARGET_OUTSIDE_HOUSE;
        }
    } else {
        if (tempTarget && _vector2d2.default.isSame(ghost.position, tempTarget)) {
            tempTarget = null;
        }
        if (_vector2d2.default.isSame(player.target, ghost.target)) {
            if (hasPowerup) {
                ghost.isDead = true;
                state.score += 200;
            }
        }
    }
};

var Ghost = exports.Ghost = function () {
    function Ghost(sprite) {
        (0, _classCallCheck3.default)(this, Ghost);

        this.sprite = sprite;
        this.frame = 0;
        this.isDead = false;
        this.isFrightened = false;
        this.isFlashing = false;
        this.forcePath = [];
    }

    (0, _createClass3.default)(Ghost, [{
        key: 'getNextDirection',
        value: function getNextDirection(mode, forceMove, shouldMakeDecision, canMoveInCurrentDirection, canMoveLeft, canMoveRight, canMoveUp, canMoveDown, isMovingX, isMovingY, state) {
            var player = state.player;

            var ghost = this.getGhost(state);
            var direction = ghost.direction,
                position = ghost.position,
                isDead = ghost.isDead;

            var nextDirection = direction;
            var isFrightened = mode === ChaseMode.Frightened && !isDead;
            var isInGhostHouse = _maze2.default.positionIsInsideGhostHouse(position);
            if (isInGhostHouse && !this.forcePath.length) {
                this.forcePath = [].concat(GET_OUT_OF_HOUSE);
            }
            if (shouldMakeDecision) {
                var target = void 0;
                if (isDead) {
                    target = TARGET_WHEN_DEAD;
                } else {
                    if (this.forcePath.length && !_vector2d2.default.isSame(position, this.forcePath[this.forcePath.length - 1])) {
                        target = this.forcePath.shift();
                    } else {
                        target = tempTarget || this.getTarget(mode, state);
                    }
                }
                // const target = !isDead ? (tempTarget || this.getTarget(mode, state)) : TARGET_WHEN_DEAD;
                this.target = target;
                var options = [];
                if (canMoveInCurrentDirection) {
                    options.push(direction);
                }
                if (isMovingX) {
                    if (canMoveUp) {
                        options.push(_enums.Direction.Up);
                    }
                    if (canMoveDown) {
                        options.push(_enums.Direction.Down);
                    }
                    if (forceMove) {
                        if (canMoveLeft && direction !== _enums.Direction.Left) {
                            options.push(_enums.Direction.Left);
                        }
                        if (canMoveDown && direction !== _enums.Direction.Right) {
                            options.push(_enums.Direction.Right);
                        }
                    }
                }
                if (isMovingY) {
                    if (canMoveLeft) {
                        options.push(_enums.Direction.Left);
                    }
                    if (canMoveRight) {
                        options.push(_enums.Direction.Right);
                    }
                    if (forceMove) {
                        if (canMoveUp && direction !== _enums.Direction.Up) {
                            options.push(_enums.Direction.Up);
                        }
                        if (canMoveDown && direction !== _enums.Direction.Down) {
                            options.push(_enums.Direction.Down);
                        }
                    }
                }
                // Last resort bailout!
                if (!options.length) {
                    options.push(_enums.Direction.Left);
                    options.push(_enums.Direction.Right);
                    options.push(_enums.Direction.Up);
                    options.push(_enums.Direction.Down);
                }
                var distance = 0;
                options.forEach(function (dir) {
                    var _getNextPosition = (0, _entity.getNextPosition)(dir, ghost.target),
                        x = _getNextPosition.x,
                        y = _getNextPosition.y;

                    var dx = target.x - x;
                    var dy = target.y - y;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    var isCloser = dist <= distance;
                    var isFarther = dist >= distance;
                    if (!distance || (isFrightened ? isFarther : isCloser)) {
                        distance = dist;
                        nextDirection = dir;
                    }
                });
            }
            if (!isDead && !isInGhostHouse && _maze2.default.positionIsInsideGhostHouse((0, _entity.getNextPosition)(nextDirection, position))) {
                return direction;
            }
            return nextDirection;
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {
            var isFrightened = this.isFrightened;

            if (isFrightened) {
                return .2;
            }
            return .5;
        }
    }, {
        key: 'update',
        value: function update(gameTime, state) {
            var ghost = this.getGhost(state);
            this.isDead = ghost.isDead;
            this.isFrightened = state.hasPowerup && !this.isDead;
            this.isFlashing = state.powerupTimer < 20;
            (0, _entity.moveEntity)(this.getGhost(state), this.getSpeed(), state);
            var position = this.position;

            if (position) {
                if (ghost.position.x !== position.x || ghost.position.y !== position.y) {
                    this.frame++;
                }
            }
            this.position = ghost.position;
            this.direction = ghost.direction;
            this.updateDirection(ghost, state);
        }
    }, {
        key: 'updateDirection',
        value: function updateDirection(ghost, state) {
            var direction = ghost.direction,
                target = ghost.target;
            var isFrightened = this.isFrightened;

            var forceMove = state.powerupTimer >= 50;
            var canMoveInCurrentDirection = _maze2.default.canMove((0, _entity.getNextPosition)(direction, target), state);
            var isMovingX = direction === _enums.Direction.Left || direction === _enums.Direction.Right;
            var isMovingY = direction === _enums.Direction.Up || direction === _enums.Direction.Down;
            var canMoveLeft = (forceMove || direction !== _enums.Direction.Right) && _maze2.default.canMove((0, _entity.getNextPosition)(_enums.Direction.Left, target), state);
            var canMoveRight = (forceMove || direction !== _enums.Direction.Left) && _maze2.default.canMove((0, _entity.getNextPosition)(_enums.Direction.Right, target), state);
            var canMoveUp = (forceMove || direction !== _enums.Direction.Down) && _maze2.default.canMove((0, _entity.getNextPosition)(_enums.Direction.Up, target), state);
            var canMoveDown = (forceMove || direction !== _enums.Direction.Up) && _maze2.default.canMove((0, _entity.getNextPosition)(_enums.Direction.Down, target), state);
            var canMoveX = isMovingX && canMoveInCurrentDirection || !isMovingX && (canMoveLeft || canMoveRight);
            var canMoveY = isMovingY && canMoveInCurrentDirection || !isMovingY && (canMoveUp || canMoveDown);
            var shouldMakeDecision = !canMoveInCurrentDirection || isMovingX && canMoveY || isMovingY && canMoveX;
            var mode = isFrightened ? ChaseMode.Frightened : ChaseMode.Chase;
            ghost.nextDirection = this.getNextDirection(mode, forceMove, shouldMakeDecision, canMoveInCurrentDirection, canMoveLeft, canMoveRight, canMoveUp, canMoveDown, isMovingX, isMovingY, state);
            checkPosition(ghost, state);
        }
    }, {
        key: 'getFrame',
        value: function getFrame() {
            var direction = this.direction,
                isFrightened = this.isFrightened,
                isDead = this.isDead,
                isFlashing = this.isFlashing;

            var anim = [0, 1];
            if (!isDead && isFrightened) {
                if (isFlashing) {
                    anim = [0, 1, 2, 3];
                } else {
                    anim = [0, 1];
                }
            } else {
                switch (direction) {
                    case _enums.Direction.Right:
                        anim = !isDead ? [0, 1] : [4];
                        break;
                    case _enums.Direction.Left:
                        anim = !isDead ? [2, 3] : [5];
                        break;
                    case _enums.Direction.Up:
                        anim = !isDead ? [4, 5] : [6];
                        break;
                    case _enums.Direction.Down:
                        anim = !isDead ? [6, 7] : [7];
                        break;
                }
            }
            return anim[this.frame % anim.length];
        }
    }, {
        key: 'render',
        value: function render(gameTime, ctx) {
            var isDead = this.isDead,
                isFrightened = this.isFrightened,
                position = this.position,
                sprite = this.sprite;

            if (!sprite || !position) {
                return;
            }
            var x = position.x,
                y = position.y;

            var xPos = x * 16 - 8;
            var yPos = y * 16 - 8;
            ctx.save();
            ctx.translate(xPos, yPos);
            ctx.drawImage(sprite.sprite, TILE_SIZE * this.getFrame(), isDead || isFrightened ? TILE_SIZE * 4 : TILE_SIZE * this.getSpriteOffset(), TILE_SIZE, TILE_SIZE, 0, 0, TILE_SIZE, TILE_SIZE);
            ctx.restore();
        }
    }]);
    return Ghost;
}();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(69);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(67);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(42);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(42);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(72);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(71);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(18)(function(){
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(20)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(52)
  , hide           = __webpack_require__(10)
  , has            = __webpack_require__(9)
  , Iterators      = __webpack_require__(19)
  , $iterCreate    = __webpack_require__(90)
  , setToStringTag = __webpack_require__(23)
  , getPrototypeOf = __webpack_require__(50)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(31)
  , createDesc     = __webpack_require__(22)
  , toIObject      = __webpack_require__(11)
  , toPrimitive    = __webpack_require__(35)
  , has            = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(45)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(51)
  , hiddenKeys = __webpack_require__(29).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(9)
  , toObject    = __webpack_require__(55)
  , IE_PROTO    = __webpack_require__(32)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(9)
  , toIObject    = __webpack_require__(11)
  , arrayIndexOf = __webpack_require__(82)(false)
  , IE_PROTO     = __webpack_require__(32)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(17)
  , invoke             = __webpack_require__(85)
  , html               = __webpack_require__(44)
  , cel                = __webpack_require__(28)
  , global             = __webpack_require__(2)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(16)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(103)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(46)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
var global        = __webpack_require__(2)
  , hide          = __webpack_require__(10)
  , Iterators     = __webpack_require__(19)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _enums = __webpack_require__(13);

var _assetLoader = __webpack_require__(60);

var _state = __webpack_require__(65);

var _state2 = _interopRequireDefault(_state);

var _maze = __webpack_require__(14);

var _maze2 = _interopRequireDefault(_maze);

var _vector2d = __webpack_require__(15);

var _vector2d2 = _interopRequireDefault(_vector2d);

var _pacman = __webpack_require__(63);

var _pacman2 = _interopRequireDefault(_pacman);

var _blinky = __webpack_require__(61);

var _blinky2 = _interopRequireDefault(_blinky);

var _pinky = __webpack_require__(64);

var _pinky2 = _interopRequireDefault(_pinky);

var _text = __webpack_require__(66);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Game = function () {
    function Game(selector, width, height) {
        (0, _classCallCheck3.default)(this, Game);

        this.width = width;
        this.height = height;
        this.gameTime = 0;
        this.gameState = _enums.GameState.Paused;
        this.state = new _state2.default();
        this.gameObjects = [];
        this.xDown = null;
        this.yDown = null;
        this.container = document.querySelector(selector);
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        this.reset();
        this.bindKeys();
        this.init();
    }

    (0, _createClass3.default)(Game, [{
        key: 'reset',
        value: function reset() {
            this.state.reset();
            this.gameState = _enums.GameState.Playing;
        }
    }, {
        key: 'bindKeys',
        value: function bindKeys() {
            var _this = this;

            document.addEventListener('keydown', function (e) {
                return _this.onKeyDown(e);
            });
            document.addEventListener('touchstart', function (e) {
                return _this.onTouchStart(e);
            });
            document.addEventListener('touchmove', function (e) {
                return _this.onTouchMove(e);
            });
        }
    }, {
        key: 'onTouchStart',
        value: function onTouchStart(e) {
            e.preventDefault();
            this.xDown = e.touches[0].clientX;
            this.yDown = e.touches[0].clientY;
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove(e) {
            var xDown = this.xDown,
                yDown = this.yDown,
                state = this.state;

            if (!xDown || !yDown) {
                return;
            }
            var player = state.player;
            var _e$touches$ = e.touches[0],
                clientX = _e$touches$.clientX,
                clientY = _e$touches$.clientY;

            var xDiff = xDown - clientX;
            var yDiff = yDown - clientY;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    player.nextDirection = _enums.Direction.Left;
                } else {
                    player.nextDirection = _enums.Direction.Right;
                }
            } else {
                if (yDiff > 0) {
                    player.nextDirection = _enums.Direction.Up;
                } else {
                    player.nextDirection = _enums.Direction.Down;
                }
            }
            this.xDown = null;
            this.yDown = null;
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(e) {
            var state = this.state;

            if (!state) {
                return;
            }
            var isPlaying = this.gameState === _enums.GameState.Playing;
            if (e.keyCode === _enums.Key.P) {
                if (isPlaying) {
                    this.gameState = _enums.GameState.Paused;
                } else {
                    this.gameState = _enums.GameState.Playing;
                }
            }
            if (this.gameState === _enums.GameState.Paused) {
                return;
            }
            var player = state.player;

            switch (e.keyCode) {
                case _enums.Key.Left:
                    player.nextDirection = _enums.Direction.Left;
                    break;
                case _enums.Key.Right:
                    player.nextDirection = _enums.Direction.Right;
                    break;
                case _enums.Key.Down:
                    player.nextDirection = _enums.Direction.Down;
                    break;
                case _enums.Key.Up:
                    player.nextDirection = _enums.Direction.Up;
                    break;
            }
        }
    }, {
        key: 'init',
        value: function init() {
            var _this2 = this;

            (0, _assetLoader.loadSprites)(['pacman', 'sprites', 'ghosts', 'font']).then(function (sprites) {
                _this2.gameObjects.push(new _maze2.default(sprites.find(function (s) {
                    return s.name === 'sprites';
                })));
                _this2.gameObjects.push(new _pacman2.default(sprites.find(function (s) {
                    return s.name === 'pacman';
                })));
                _this2.gameObjects.push(new _blinky2.default(sprites.find(function (s) {
                    return s.name === 'ghosts';
                })));
                _this2.gameObjects.push(new _pinky2.default(sprites.find(function (s) {
                    return s.name === 'ghosts';
                })));
                _this2.textRenderer = new _text2.default(sprites.find(function (s) {
                    return s.name === 'font';
                }));
                _this2.mainloop();
            });
        }
    }, {
        key: 'mainloop',
        value: function mainloop() {
            var _this3 = this;

            if (this.gameState === _enums.GameState.Playing) {
                this.gameTime++;
                this.update(this.gameTime);
            }
            this.render(this.gameTime, this.ctx);
            window.requestAnimationFrame(function () {
                return _this3.mainloop();
            });
        }
    }, {
        key: 'update',
        value: function update(gameTime) {
            var _this4 = this;

            if (gameTime % 2 === 0) {
                this.gameObjects.forEach(function (obj) {
                    return obj.update(gameTime, _this4.state);
                });
            }
        }
    }, {
        key: 'renderTitle',
        value: function renderTitle(title, ctx) {
            ctx.fillStyle = 'rgba(255, 255, 255, .9';
            ctx.fillRect(0, this.height / 2 - 30, this.width, 60);
            ctx.font = '20px sans-serif';
            ctx.fillStyle = '#555';

            var _ctx$measureText = ctx.measureText(title),
                width = _ctx$measureText.width;

            ctx.fillText(title, (this.width - width) / 2, this.height / 2 + 6);
        }
    }, {
        key: 'renderText',
        value: function renderText(text, size, color, position, ctx) {
            var textRenderer = this.textRenderer;

            if (!textRenderer) {
                return;
            }
            this.textRenderer.renderText(text, size, color, position, ctx);
        }
    }, {
        key: 'render',
        value: function render(gameTime, ctx) {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, this.width, this.height);
            this.renderText(this.state.displayScore, _text.FontSize.Normal, _text.Color.White, new _vector2d2.default(3, 1), ctx);
            ctx.save();
            ctx.translate(0, 40);
            this.gameObjects.forEach(function (obj) {
                return obj.render(gameTime, ctx);
            });
            ctx.restore();
            switch (this.gameState) {
                case _enums.GameState.Ready:
                    this.renderText('ready!', _text.FontSize.Normal, _text.Color.Yellow, new _vector2d2.default(11, 19.5), ctx);
                    break;
                case _enums.GameState.Paused:
                    this.renderText('paused!', _text.FontSize.Normal, _text.Color.Yellow, new _vector2d2.default(10.7, 19.5), ctx);
                    break;
            }
        }
    }]);
    return Game;
}(); /*
      * Pac-Man by Oscar Wallhult
      *
      */


exports.default = Game;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadSprites = undefined;

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadSprite = function loadSprite(name) {
    return new _promise2.default(function (resolve, reject) {
        var sprite = new Image();
        sprite.onload = function () {
            return resolve({ name: name, sprite: sprite });
        };
        sprite.onerror = function (err) {
            return reject(err);
        };
        sprite.src = "./assets/" + name + ".png";
    });
};
var loadSprites = exports.loadSprites = function loadSprites(sources) {
    var sprites = sources.map(loadSprite);
    return _promise2.default.all(sprites);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ghost = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blinky = function (_Ghost) {
    (0, _inherits3.default)(Blinky, _Ghost);

    function Blinky(sprite) {
        (0, _classCallCheck3.default)(this, Blinky);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Blinky.__proto__ || (0, _getPrototypeOf2.default)(Blinky)).call(this, sprite));

        _this.sprite = sprite;
        return _this;
    }

    (0, _createClass3.default)(Blinky, [{
        key: 'getSpriteOffset',
        value: function getSpriteOffset() {
            return 0;
        }
    }, {
        key: 'getGhost',
        value: function getGhost(state) {
            var blinky = state.blinky;

            return blinky;
        }
    }, {
        key: 'getTarget',
        value: function getTarget(mode, state) {
            var player = state.player,
                blinky = state.blinky;

            switch (mode) {
                case _ghost.ChaseMode.Chase:
                case _ghost.ChaseMode.Frightened:
                    return player.position;
            }
            return blinky.position;
        }
    }]);
    return Blinky;
}(_ghost.Ghost);

exports.default = Blinky;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(59);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  new _game2.default('#gameContainer', 448, 536);
}; /*
    * Pac-Man by Oscar Wallhult
    *
    */

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _enums = __webpack_require__(13);

var _entity = __webpack_require__(25);

var _vector2d = __webpack_require__(15);

var _vector2d2 = _interopRequireDefault(_vector2d);

var _maze = __webpack_require__(14);

var _maze2 = _interopRequireDefault(_maze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TILE_SIZE = 32;
var SPEED = .5;
var checkPosition = function checkPosition(state) {
    var position = state.player.position;

    var tile = _maze2.default.getTile(position, state);
    if (tile.isFood) {
        if (tile.isPowerup) {
            state.hasPowerup = true;
            state.score += 50;
        } else {
            state.score += 10;
        }
        state.updateMap(new _vector2d2.default(tile.col, tile.row), 0);
    }
};

var PacMan = function () {
    function PacMan(sprite) {
        (0, _classCallCheck3.default)(this, PacMan);

        this.sprite = sprite;
        this.frame = 0;
    }

    (0, _createClass3.default)(PacMan, [{
        key: 'getFrame',
        value: function getFrame() {
            var anim = {
                start: 0,
                end: 2
            };
            return Math.floor(anim.start + this.frame * .5 % anim.end + 1);
        }
    }, {
        key: 'update',
        value: function update(gameTime, state) {
            var player = state.player;
            var position = this.position;

            (0, _entity.moveEntity)(player, SPEED, state);
            if (position) {
                if (player.position.x !== position.x || player.position.y !== position.y) {
                    this.frame++;
                }
            }
            this.position = player.position;
            this.direction = player.direction;
            checkPosition(state);
        }
    }, {
        key: 'render',
        value: function render(gameTime, ctx) {
            var position = this.position,
                sprite = this.sprite;

            if (!sprite || !position) {
                return;
            }
            var x = position.x,
                y = position.y;

            var xPos = x * 16 - 8;
            var yPos = y * 16 - 8;
            ctx.save();
            ctx.translate(xPos, yPos);
            var offsetX = 0;
            var offsetY = 0;
            switch (this.direction) {
                case _enums.Direction.Right:
                    ctx.rotate(0);
                    break;
                case _enums.Direction.Left:
                    ctx.rotate(180 * (Math.PI / 180));
                    offsetX = -32;
                    offsetY = -32;
                    break;
                case _enums.Direction.Down:
                    ctx.rotate(90 * (Math.PI / 180));
                    offsetY = -32;
                    break;
                case _enums.Direction.Up:
                    ctx.rotate(-90 * (Math.PI / 180));
                    offsetX = -32;
                    break;
            }
            ctx.drawImage(sprite.sprite, TILE_SIZE * this.getFrame(), 0, TILE_SIZE, TILE_SIZE, offsetX, offsetY, TILE_SIZE, TILE_SIZE);
            ctx.restore();
        }
    }]);
    return PacMan;
}();

exports.default = PacMan;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ghost = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pinky = function (_Ghost) {
    (0, _inherits3.default)(Pinky, _Ghost);

    function Pinky(sprite) {
        (0, _classCallCheck3.default)(this, Pinky);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Pinky.__proto__ || (0, _getPrototypeOf2.default)(Pinky)).call(this, sprite));

        _this.sprite = sprite;
        return _this;
    }

    (0, _createClass3.default)(Pinky, [{
        key: 'getSpriteOffset',
        value: function getSpriteOffset() {
            return 1;
        }
    }, {
        key: 'getGhost',
        value: function getGhost(state) {
            var pinky = state.pinky;

            return pinky;
        }
    }, {
        key: 'getTarget',
        value: function getTarget(mode, state) {
            var player = state.player,
                pinky = state.pinky;

            switch (mode) {
                case _ghost.ChaseMode.Chase:
                case _ghost.ChaseMode.Frightened:
                    return player.position;
            }
            return pinky.position;
        }
    }]);
    return Pinky;
}(_ghost.Ghost);

exports.default = Pinky;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _enums = __webpack_require__(13);

var _vector2d = __webpack_require__(15);

var _vector2d2 = _interopRequireDefault(_vector2d);

var _entity = __webpack_require__(25);

var _entity2 = _interopRequireDefault(_entity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var State = function () {
    function State() {
        (0, _classCallCheck3.default)(this, State);

        this._map = [];
        this._score = 0;
        this._powerupTimer = 0;
    }

    (0, _createClass3.default)(State, [{
        key: 'reset',
        value: function reset() {
            this.resetPlayer();
            this.resetGhosts();
            this.resetMap();
            this.hasPowerup = false;
        }
    }, {
        key: 'resetPlayer',
        value: function resetPlayer() {
            this._player = new _entity2.default(new _vector2d2.default(13.5, 23), new _vector2d2.default(14, 23), _enums.Direction.Right);
            this._score = 0;
        }
    }, {
        key: 'resetGhosts',
        value: function resetGhosts() {
            this._blinky = new _entity2.default(new _vector2d2.default(13.5, 11), new _vector2d2.default(12, 11), _enums.Direction.Left);
            this._pinky = new _entity2.default(new _vector2d2.default(13, 14), new _vector2d2.default(13, 14), _enums.Direction.Up);
        }
    }, {
        key: 'updateMap',
        value: function updateMap(pos, tile) {
            this._map[pos.y][pos.x] = tile;
        }
    }, {
        key: 'resetMap',
        value: function resetMap() {
            this._map = [[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 17, 18, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3], [13, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 14], [13, 37, 7, 8, 8, 9, 37, 7, 8, 8, 8, 9, 37, 15, 16, 37, 7, 8, 8, 8, 9, 37, 7, 8, 8, 9, 37, 14], [13, 38, 15, 0, 0, 16, 37, 15, 0, 0, 0, 16, 37, 15, 16, 37, 15, 0, 0, 0, 16, 37, 15, 0, 0, 16, 38, 14], [13, 37, 10, 11, 11, 12, 37, 10, 11, 11, 11, 12, 37, 10, 12, 37, 10, 11, 11, 11, 12, 37, 10, 11, 11, 12, 37, 14], [13, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 14], [13, 37, 7, 8, 8, 9, 37, 7, 9, 37, 7, 8, 8, 8, 8, 8, 8, 9, 37, 7, 9, 37, 7, 8, 8, 9, 37, 14], [13, 37, 10, 11, 11, 12, 37, 15, 16, 37, 10, 11, 11, 21, 22, 11, 11, 12, 37, 15, 16, 37, 10, 11, 11, 12, 37, 14], [13, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 14], [4, 5, 5, 5, 5, 9, 37, 15, 24, 8, 8, 9, 0, 15, 16, 0, 7, 8, 8, 23, 16, 37, 7, 5, 5, 5, 5, 6], [0, 0, 0, 0, 0, 13, 37, 15, 22, 11, 11, 12, 0, 10, 12, 0, 10, 11, 11, 21, 16, 37, 14, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 25, 26, 26, 0, 0, 26, 26, 27, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 12, 37, 10, 12, 0, 31, 39, 39, 0, 0, 39, 39, 32, 0, 10, 12, 37, 10, 2, 2, 2, 2, 2], [0, 0, 0, 0, 0, 0, 37, 0, 0, 0, 31, 39, 0, 0, 0, 0, 39, 32, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0], [5, 5, 5, 5, 5, 9, 37, 7, 9, 0, 31, 39, 39, 39, 39, 39, 39, 32, 0, 7, 9, 37, 7, 5, 5, 5, 5, 5], [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 28, 29, 29, 29, 29, 29, 29, 30, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 13, 37, 15, 16, 0, 7, 8, 8, 8, 8, 8, 8, 9, 0, 15, 16, 37, 14, 0, 0, 0, 0, 0], [1, 2, 2, 2, 2, 12, 37, 10, 12, 0, 10, 11, 11, 21, 22, 11, 11, 12, 0, 10, 12, 37, 10, 2, 2, 2, 2, 3], [13, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 14], [13, 37, 7, 8, 8, 9, 37, 7, 8, 8, 8, 9, 37, 15, 16, 37, 7, 8, 8, 8, 9, 37, 7, 8, 8, 9, 37, 14], [13, 37, 10, 11, 21, 16, 37, 10, 11, 11, 11, 12, 37, 10, 12, 37, 10, 11, 11, 11, 12, 37, 15, 22, 11, 12, 37, 14], [13, 38, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 37, 0, 0, 37, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 38, 14], [33, 8, 9, 37, 15, 16, 37, 7, 9, 37, 7, 8, 8, 8, 8, 8, 8, 9, 37, 7, 9, 37, 15, 16, 37, 7, 8, 34], [35, 11, 12, 37, 10, 12, 37, 15, 16, 37, 10, 11, 11, 21, 22, 11, 11, 12, 37, 15, 16, 37, 10, 12, 37, 10, 11, 36], [13, 37, 37, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 15, 16, 37, 37, 37, 37, 37, 37, 14], [13, 37, 7, 8, 8, 8, 8, 23, 24, 8, 8, 9, 37, 15, 16, 37, 7, 8, 8, 23, 24, 8, 8, 8, 8, 9, 37, 14], [13, 37, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 37, 10, 12, 37, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 37, 14], [13, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 14], [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6]];
        }
    }, {
        key: 'map',
        get: function get() {
            return this._map;
        }
    }, {
        key: 'player',
        get: function get() {
            return this._player;
        }
    }, {
        key: 'blinky',
        get: function get() {
            return this._blinky;
        }
    }, {
        key: 'pinky',
        get: function get() {
            return this._pinky;
        }
    }, {
        key: 'score',
        get: function get() {
            return this._score;
        },
        set: function set(score) {
            this._score = score;
        }
    }, {
        key: 'displayScore',
        get: function get() {
            var score = this.score.toString();
            return '' + '0000'.substr(0, 4 - score.length) + score;
        }
    }, {
        key: 'powerupTimer',
        get: function get() {
            return this._powerupTimer;
        }
    }, {
        key: 'hasPowerup',
        get: function get() {
            if (this._powerupTimer > 0) {
                this._powerupTimer -= .4;
            }
            return this._powerupTimer > 0;
        },
        set: function set(value) {
            if (value) {
                this._powerupTimer = 100;
            } else {
                this._powerupTimer = 0;
            }
        }
    }]);
    return State;
}();

exports.default = State;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontSize = exports.Color = undefined;

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _maze = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Color = exports.Color = undefined;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Cyan"] = 2] = "Cyan";
})(Color || (exports.Color = Color = {}));
var FontSize = exports.FontSize = undefined;
(function (FontSize) {
    FontSize[FontSize["Small"] = 0] = "Small";
    FontSize[FontSize["Normal"] = 1] = "Normal";
    FontSize[FontSize["Large"] = 2] = "Large";
})(FontSize || (exports.FontSize = FontSize = {}));
var BITMAP_WIDTH = 25;
var BITMAP_HEIGHT = 25;
var getChar = function getChar(char) {
    switch (char.toUpperCase()) {
        case 'A':
            return {
                x: 0,
                y: 0
            };
        case 'B':
            return {
                x: 1,
                y: 0
            };
        case 'C':
            return {
                x: 2,
                y: 0
            };
        case 'D':
            return {
                x: 3,
                y: 0
            };
        case 'E':
            return {
                x: 4,
                y: 0
            };
        case 'F':
            return {
                x: 5,
                y: 0
            };
        case 'G':
            return {
                x: 6,
                y: 0
            };
        case 'H':
            return {
                x: 7,
                y: 0
            };
        case 'I':
            return {
                x: 8,
                y: 0
            };
        case 'J':
            return {
                x: 9,
                y: 0
            };
        case 'K':
            return {
                x: 10,
                y: 0
            };
        case 'L':
            return {
                x: 11,
                y: 0
            };
        case 'M':
            return {
                x: 12,
                y: 0
            };
        case 'N':
            return {
                x: 13,
                y: 0
            };
        case 'O':
            return {
                x: 14,
                y: 0
            };
        case 'P':
            return {
                x: 15,
                y: 0
            };
        case 'Q':
            return {
                x: 16,
                y: 0
            };
        case 'R':
            return {
                x: 17,
                y: 0
            };
        case 'S':
            return {
                x: 18,
                y: 0
            };
        case 'T':
            return {
                x: 19,
                y: 0
            };
        case 'U':
            return {
                x: 20,
                y: 0
            };
        case 'V':
            return {
                x: 21,
                y: 0
            };
        case 'W':
            return {
                x: 22,
                y: 0
            };
        case 'X':
            return {
                x: 23,
                y: 0
            };
        case 'Y':
            return {
                x: 24,
                y: 0
            };
        case 'Z':
            return {
                x: 25,
                y: 0
            };
        case '0':
            return {
                x: 0,
                y: 1
            };
        case '1':
            return {
                x: 1,
                y: 1
            };
        case '2':
            return {
                x: 2,
                y: 1
            };
        case '3':
            return {
                x: 3,
                y: 1
            };
        case '4':
            return {
                x: 4,
                y: 1
            };
        case '5':
            return {
                x: 5,
                y: 1
            };
        case '6':
            return {
                x: 6,
                y: 1
            };
        case '7':
            return {
                x: 7,
                y: 1
            };
        case '8':
            return {
                x: 8,
                y: 1
            };
        case '9':
            return {
                x: 9,
                y: 1
            };
        case '!':
            return {
                x: 10,
                y: 1
            };
        case '?':
            return {
                x: 11,
                y: 1
            };
        case '.':
            return {
                x: 12,
                y: 1
            };
        case ',':
            return {
                x: 13,
                y: 1
            };
        case '/':
            return {
                x: 14,
                y: 1
            };
        case '"':
            return {
                x: 15,
                y: 1
            };
        default:
            return {
                x: 25,
                y: 1
            };
    }
};

var TextRenderer = function () {
    function TextRenderer(sprite) {
        (0, _classCallCheck3.default)(this, TextRenderer);

        this.sprite = sprite;
        this.bufferCanvas = document.createElement('canvas');
        this.bufferCtx = this.bufferCanvas.getContext('2d');
    }

    (0, _createClass3.default)(TextRenderer, [{
        key: "getDimensions",
        value: function getDimensions(size) {
            return {
                width: 16,
                height: 16
            };
        }
    }, {
        key: "renderCharacter",
        value: function renderCharacter(char, size, index, ctx) {
            var sprite = this.sprite;

            var _getDimensions = this.getDimensions(size),
                width = _getDimensions.width,
                height = _getDimensions.height;

            var _getChar = getChar(char),
                x = _getChar.x,
                y = _getChar.y;

            ctx.drawImage(sprite.sprite, BITMAP_WIDTH * x, BITMAP_HEIGHT * y, BITMAP_WIDTH, BITMAP_HEIGHT, index * width, 0, width, width);
        }
    }, {
        key: "getColor",
        value: function getColor(color) {
            switch (color) {
                case Color.Cyan:
                    return '#00ffff';
                case Color.Yellow:
                    return '#ffff00';
                case Color.White:
                default:
                    return '#fff';
            }
        }
    }, {
        key: "renderText",
        value: function renderText(text, size, color, position, ctx) {
            var _this = this;

            var bufferCanvas = this.bufferCanvas,
                bufferCtx = this.bufferCtx,
                sprite = this.sprite;

            if (!sprite) {
                return;
            }
            var x = position.x,
                y = position.y;

            ctx.save();
            ctx.translate(_maze.TILE_SIZE * x, _maze.TILE_SIZE * y);

            var _getDimensions2 = this.getDimensions(size),
                width = _getDimensions2.width,
                height = _getDimensions2.height;

            var chars = text.split('');
            var bufferWidth = chars.length * width;
            bufferCtx.save();
            bufferCtx.clearRect(0, 0, bufferWidth, height);
            chars.forEach(function (char, index) {
                return _this.renderCharacter(char, size, index, bufferCtx);
            });
            bufferCtx.fillStyle = this.getColor(color);
            bufferCtx.globalCompositeOperation = "source-in";
            bufferCtx.fillRect(0, 0, bufferWidth, height);
            bufferCtx.restore();
            ctx.drawImage(bufferCanvas, 0, 0);
            ctx.restore();
        }
    }]);
    return TextRenderer;
}();

exports.default = TextRenderer;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
var $Object = __webpack_require__(1).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109);
module.exports = __webpack_require__(1).Object.getPrototypeOf;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
module.exports = __webpack_require__(1).Object.setPrototypeOf;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(111);
module.exports = __webpack_require__(1).Promise;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(112);
__webpack_require__(56);
__webpack_require__(113);
__webpack_require__(114);
module.exports = __webpack_require__(1).Symbol;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(58);
module.exports = __webpack_require__(37).f('iterator');

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11)
  , toLength  = __webpack_require__(54)
  , toIndex   = __webpack_require__(104);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(21)
  , gOPS    = __webpack_require__(49)
  , pIE     = __webpack_require__(31);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(17)
  , call        = __webpack_require__(89)
  , isArrayIter = __webpack_require__(87)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(54)
  , getIterFn   = __webpack_require__(105)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(19)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(16);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(30)
  , descriptor     = __webpack_require__(22)
  , setToStringTag = __webpack_require__(23)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(21)
  , toIObject = __webpack_require__(11);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(24)('meta')
  , isObject = __webpack_require__(12)
  , has      = __webpack_require__(9)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(18)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , macrotask = __webpack_require__(53).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(16)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(5)
  , getKeys  = __webpack_require__(21);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11)
  , gOPN      = __webpack_require__(48).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8)
  , core    = __webpack_require__(1)
  , fails   = __webpack_require__(18);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(10);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(12)
  , anObject = __webpack_require__(5);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(17)(Function.call, __webpack_require__(47).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(2)
  , core        = __webpack_require__(1)
  , dP          = __webpack_require__(7)
  , DESCRIPTORS = __webpack_require__(6)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(26)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , defined   = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(43)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(19);
module.exports = __webpack_require__(1).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(80)
  , step             = __webpack_require__(92)
  , Iterators        = __webpack_require__(19)
  , toIObject        = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(46)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(30)});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(55)
  , $getPrototypeOf = __webpack_require__(50);

__webpack_require__(98)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(100).set});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(20)
  , global             = __webpack_require__(2)
  , ctx                = __webpack_require__(17)
  , classof            = __webpack_require__(43)
  , $export            = __webpack_require__(8)
  , isObject           = __webpack_require__(12)
  , aFunction          = __webpack_require__(26)
  , anInstance         = __webpack_require__(81)
  , forOf              = __webpack_require__(84)
  , speciesConstructor = __webpack_require__(102)
  , task               = __webpack_require__(53).set
  , microtask          = __webpack_require__(95)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(99)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(23)($Promise, PROMISE);
__webpack_require__(101)(PROMISE);
Wrapper = __webpack_require__(1)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(91)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(2)
  , has            = __webpack_require__(9)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(52)
  , META           = __webpack_require__(94).KEY
  , $fails         = __webpack_require__(18)
  , shared         = __webpack_require__(33)
  , setToStringTag = __webpack_require__(23)
  , uid            = __webpack_require__(24)
  , wks            = __webpack_require__(0)
  , wksExt         = __webpack_require__(37)
  , wksDefine      = __webpack_require__(36)
  , keyOf          = __webpack_require__(93)
  , enumKeys       = __webpack_require__(83)
  , isArray        = __webpack_require__(88)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(11)
  , toPrimitive    = __webpack_require__(35)
  , createDesc     = __webpack_require__(22)
  , _create        = __webpack_require__(30)
  , gOPNExt        = __webpack_require__(97)
  , $GOPD          = __webpack_require__(47)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(21)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(48).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f  = $propertyIsEnumerable;
  __webpack_require__(49).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(20)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('asyncIterator');

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('observable');

/***/ })
/******/ ]);
//# sourceMappingURL=pacman.js.map