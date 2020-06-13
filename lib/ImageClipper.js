(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ImageClipper = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  /* global Reflect, Promise */
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  function __extends(d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function () {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }

      return t;
    };

    return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};

    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }

  var default_1 = function () {
    function default_1() {
      this.listenersMap = {};
    }

    default_1.prototype.target = function (el) {
      var _this = this;

      return {
        on: function (eventName, listener) {
          _this.on(eventName, listener, {
            target: el
          });
        }
      };
    };

    default_1.prototype.on = function (eventName, listener, _a) {
      var target = (_a === void 0 ? {} : _a).target;

      if (void 0 === this.listenersMap[eventName]) {
        this.listenersMap[eventName] = [];
      }

      if (void 0 !== target) {
        listener.target = target;
      }

      this.listenersMap[eventName].push(listener);
    };

    default_1.prototype.off = function (eventName, listener) {
      var listeners = this.listenersMap[eventName];

      if (void 0 !== listeners) {
        if (void 0 === listener) {
          delete this.listenersMap[eventName];
        } else {
          var index = listeners.findIndex(function (fn) {
            return fn === listener;
          });
          listeners.splice(index, 1);
        }
      }
    };

    default_1.prototype.emit = function (eventName, payload, beforeHook) {
      var e_1, _a;

      if (beforeHook === void 0) {
        beforeHook = function () {
          return true;
        };
      }

      var listeners = this.listenersMap[eventName];

      if (void 0 !== listeners && 0 < listeners.length) {
        try {
          for (var listeners_1 = __values(listeners), listeners_1_1 = listeners_1.next(); !listeners_1_1.done; listeners_1_1 = listeners_1.next()) {
            var listener = listeners_1_1.value;
            var target = listener.target;

            if (beforeHook({
              target: target
            })) {
              listener(payload);
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (listeners_1_1 && !listeners_1_1.done && (_a = listeners_1.return)) _a.call(listeners_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    };

    default_1.prototype.destroy = function () {
      this.listenersMap = {};
    };

    return default_1;
  }();

  var ObjectToString = Object.prototype.toString;

  function isRegExp(input) {
    return '[object RegExp]' === ObjectToString.call(input);
  }

  function isFunction(input) {
    return '[object Function]' === ObjectToString.call(input);
  }

  var CLIENT_X = 'clientX';
  var CLIENT_Y = 'clientY';
  var COMPUTE_INTERVAL = 16;
  var INPUT_START = 'start';
  var INPUT_MOVE = 'move';
  var INPUT_CANCEL = 'cancel';
  var INPUT_END = 'end';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var DIRECTION_UP = 'up';
  var DIRECTION_DOWN = 'down';
  var NONE = 'none';
  var TOUCH = 'touch';
  var MOUSE = 'mouse';
  var TOUCH_START = TOUCH + INPUT_START;
  var TOUCH_MOVE = TOUCH + INPUT_MOVE;
  var TOUCH_END = TOUCH + INPUT_END;
  var TOUCH_CANCEL = TOUCH + INPUT_CANCEL;
  var MOUSE_UP = MOUSE + DIRECTION_UP;
  var MOUSE_MOVE = MOUSE + INPUT_MOVE;
  var MOUSE_DOWN = MOUSE + DIRECTION_DOWN;
  var SUPPORT_TOUCH = ("on" + TOUCH_START in window);
  var STATUS_POSSIBLE = 'p';
  var STATUS_START = INPUT_START;
  var STATUS_MOVE = INPUT_MOVE;
  var STATUS_END = INPUT_END;
  var STATUS_RECOGNIZED = 'r';
  var STATUS_FAILED = 'f';
  var STATUS_CANCELLED = INPUT_CANCEL;

  var default_1$1 = function () {
    function default_1() {}

    return default_1;
  }();

  var default_1$1$1 = function (_super) {
    __extends(default_1, _super);

    function default_1() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    default_1.prototype.load = function (event) {
      var targets = [];
      var points = Array.from(event.touches).map(function (_a) {
        var clientX = _a.clientX,
            clientY = _a.clientY,
            target = _a.target;
        targets.push(target);
        return {
          clientX: clientX,
          clientY: clientY,
          target: target
        };
      });
      var changedPoints = Array.from(event.changedTouches).map(function (_a) {
        var clientX = _a.clientX,
            clientY = _a.clientY,
            target = _a.target;
        return {
          clientX: clientX,
          clientY: clientY,
          target: target
        };
      });
      return {
        inputType: event.type.replace('touch', ''),
        changedPoints: changedPoints,
        points: points,
        nativeEvent: event,
        target: event.target,
        targets: targets
      };
    };

    return default_1;
  }(default_1$1);

  var default_1$2 = function (_super) {
    __extends(default_1, _super);

    function default_1() {
      var _this = _super.call(this) || this;

      _this.target = null;
      _this.isPressed = false;
      return _this;
    }

    default_1.prototype.load = function (event) {
      var clientX = event.clientX,
          clientY = event.clientY,
          type = event.type,
          button = event.button,
          target = event.target;
      var points = [{
        clientX: clientX,
        clientY: clientY,
        target: target
      }];
      var inputType;

      if (MOUSE_DOWN === type && 0 === button) {
        this.target = target;
        this.isPressed = true;
        inputType = INPUT_START;
      } else if (this.isPressed) {
        if (MOUSE_MOVE === type) {
          inputType = INPUT_MOVE;
        } else if (MOUSE_UP === type) {
          points = [];
          inputType = INPUT_END;
          this.isPressed = false;
        }
      }

      var changedPoints = this.prevPoints || [{
        clientX: clientX,
        clientY: clientY,
        target: target
      }];
      this.prevPoints = [{
        clientX: clientX,
        clientY: clientY,
        target: target
      }];

      if (void 0 !== inputType) {
        return {
          inputType: inputType,
          changedPoints: changedPoints,
          points: points,
          target: this.target,
          targets: [this.target],
          nativeEvent: event
        };
      }
    };

    return default_1;
  }(default_1$1);

  var default_1$3 = function () {
    function default_1() {
      var Input = SUPPORT_TOUCH ? default_1$1$1 : default_1$2;
      this.adapter = new Input();
      this.id = 0;
    }

    default_1.prototype.transform = function (event) {
      this.prevInput = this.activeInput;
      var baseInputWithoutId = this.adapter.load(event);

      if (void 0 !== baseInputWithoutId) {
        var id = Number.MAX_SAFE_INTEGER > this.id ? ++this.id : 1;

        var baseInput = __assign(__assign({}, baseInputWithoutId), {
          id: id
        });

        var pureInput = extendInput(baseInput);
        this.activeInput = pureInput;
        var isStart = pureInput.isStart,
            pointLength = pureInput.pointLength;

        if (isStart) {
          this.startInput = pureInput;
          this.prevInput = void 0;

          if (1 < pointLength) {
            this.startMultiInput = pureInput;
          } else {
            this.startMultiInput = void 0;
          }
        }

        return __assign(__assign({}, pureInput), {
          prevInput: this.prevInput,
          startMultiInput: this.startMultiInput,
          startInput: this.startInput
        });
      }
    };

    return default_1;
  }();

  function getCenter(points) {
    var length = points.length;

    if (0 < length) {
      if (1 === length) {
        var _a = points[0],
            clientX = _a.clientX,
            clientY = _a.clientY;
        return {
          x: Math.round(clientX),
          y: Math.round(clientY)
        };
      }

      var countPoint = points.reduce(function (countPoint, point) {
        countPoint.x += point[CLIENT_X];
        countPoint.y += point[CLIENT_Y];
        return countPoint;
      }, {
        x: 0,
        y: 0
      });
      return {
        x: Math.round(countPoint.x / length),
        y: Math.round(countPoint.y / length)
      };
    }
  }

  function extendInput(inputBase) {
    var inputType = inputBase.inputType,
        points = inputBase.points,
        changedPoints = inputBase.changedPoints,
        nativeEvent = inputBase.nativeEvent;
    var pointLength = points.length;
    var isStart = INPUT_START === inputType;
    var isEnd = INPUT_END === inputType && 0 === pointLength || INPUT_CANCEL === inputType;
    var timestamp = performance.now();

    var _a = getCenter(points) || getCenter(changedPoints),
        x = _a.x,
        y = _a.y;

    var currentTarget = nativeEvent.currentTarget;
    return __assign(__assign({}, inputBase), {
      x: x,
      y: y,
      timestamp: timestamp,
      isStart: isStart,
      isEnd: isEnd,
      pointLength: pointLength,
      currentTarget: currentTarget,
      getOffset: function (el) {
        if (el === void 0) {
          el = currentTarget;
        }

        var rect = el.getBoundingClientRect();
        return {
          x: x - Math.round(rect.left),
          y: y - Math.round(rect.top)
        };
      }
    });
  }

  function dispatchDomEvent(el, payload, eventInit) {
    var target = payload.target,
        currentTarget = payload.currentTarget,
        type = payload.type,
        data = __rest(payload, ["target", "currentTarget", "type"]);

    var event;

    if ('createEvent' in document) {
      event = document.createEvent('HTMLEvents');
      event.initEvent(type, eventInit === null || eventInit === void 0 ? void 0 : eventInit.bubbles, eventInit === null || eventInit === void 0 ? void 0 : eventInit.cancelable);
    } else {
      event = new Event(type, eventInit);
    }

    Object.assign(event, data, {
      match: function () {
        return payload.targets.every(function (target) {
          return event.currentTarget.contains(target);
        });
      }
    });
    return el.dispatchEvent(event);
  }

  function canPreventDefault(event, options) {
    if (!options.isPreventDefault) return false;
    var isPreventDefault = true;

    if (null !== event.target) {
      var preventDefaultExclude = options.preventDefaultExclude;

      if (isRegExp(preventDefaultExclude)) {
        if ('tagName' in event.target) {
          var tagName = event.target.tagName;
          isPreventDefault = !preventDefaultExclude.test(tagName);
        }
      } else if (isFunction(preventDefaultExclude)) {
        isPreventDefault = !preventDefaultExclude(event);
      }
    }

    return isPreventDefault;
  }

  var TOUCH_EVENT_NAMES = [TOUCH_START, TOUCH_MOVE, TOUCH_END, TOUCH_CANCEL];

  function bindElement(el, callback, options) {
    if (SUPPORT_TOUCH) {
      TOUCH_EVENT_NAMES.forEach(function (eventName) {
        el.addEventListener(eventName, callback, options);
      });
      return function () {
        TOUCH_EVENT_NAMES.forEach(function (eventName) {
          el.removeEventListener(eventName, callback);
        });
      };
    } else {
      el.addEventListener(MOUSE_DOWN, callback, options);
      window.addEventListener(MOUSE_MOVE, callback, options);
      window.addEventListener(MOUSE_UP, callback, options);
      return function () {
        el.removeEventListener(MOUSE_DOWN, callback);
        window.removeEventListener(MOUSE_MOVE, callback);
        window.removeEventListener(MOUSE_UP, callback);
      };
    }
  }

  function use(instanceOrClass, Recognizer, options) {
    var name = options === null || options === void 0 ? void 0 : options.name;
    if (void 0 !== name && void 0 !== instanceOrClass.recognizerMap[name]) return;
    var instance = new Recognizer(options);
    instanceOrClass.recognizerMap[instance.name] = instance;
    instance.recognizerMap = instanceOrClass.recognizerMap;
    instanceOrClass.recognizers.push(instanceOrClass.recognizerMap[instance.name]);
  }

  function removeUse(instanceOrClass, recognizerName) {
    var e_1, _a;

    if (void 0 === recognizerName) {
      instanceOrClass.recognizers = [];
      instanceOrClass.recognizerMap = {};
    } else {
      try {
        for (var _b = __values(instanceOrClass.recognizers.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = __read(_c.value, 2),
              index = _d[0],
              recognizer = _d[1];

          if (recognizerName === recognizer.options.name) {
            instanceOrClass.recognizers.splice(index, 1);
            delete instanceOrClass.recognizerMap[recognizerName];
            break;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
  }

  function emit2(at, payload) {
    var type = payload.type,
        target = payload.target,
        targets = payload.targets;
    at.emit(type, payload, function (data) {
      if (void 0 !== (data === null || data === void 0 ? void 0 : data.target)) {
        var currentTarget_1 = data.target;
        return targets.every(function (target) {
          return currentTarget_1.contains(target);
        });
      }

      return true;
    });
    var AT_AFTER = 'at:after';
    at.emit(AT_AFTER, payload);

    if (!!at.options.domEvents && void 0 !== at.el && null !== target) {
      dispatchDomEvent(target, payload, at.options.domEvents);
      dispatchDomEvent(target, __assign(__assign({}, payload), {
        type: AT_AFTER
      }), at.options.domEvents);
    }
  }

  var DEFAULT_OPTIONS = {
    domEvents: {
      bubbles: true,
      cancelable: true
    },
    isPreventDefault: true,
    preventDefaultExclude: /^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/
  };

  var AnyTouch = function (_super) {
    __extends(AnyTouch, _super);

    function AnyTouch(el, options) {
      var _this = _super.call(this) || this;

      _this.recognizerMap = {};
      _this.recognizers = [];
      _this.cacheComputedFunctionGroup = Object.create(null);
      _this.el = el;
      _this.input = new default_1$3();
      _this.options = __assign(__assign({}, DEFAULT_OPTIONS), options);
      _this.recognizerMap = AnyTouch.recognizerMap;
      _this.recognizers = AnyTouch.recognizers;

      if (void 0 !== el) {
        el.style.webkitTapHighlightColor = 'rgba(0,0,0,0)';
        var supportsPassive_1 = false;

        try {
          var opts = {};
          Object.defineProperty(opts, 'passive', {
            get: function () {
              supportsPassive_1 = true;
            }
          });
          window.addEventListener('_', function () {
            return void 0;
          }, opts);
        } catch (_a) {}

        _this.on('unbind', bindElement(el, _this.catchEvent.bind(_this), !_this.options.isPreventDefault && supportsPassive_1 ? {
          passive: true
        } : false));
      }

      return _this;
    }

    AnyTouch.prototype.use = function (Recognizer, options) {
      use(this, Recognizer, options);
    };

    AnyTouch.prototype.removeUse = function (name) {
      removeUse(this, name);
    };

    AnyTouch.prototype.catchEvent = function (event) {
      var e_1, _a;

      var _this = this;

      if (canPreventDefault(event, this.options)) {
        event.preventDefault();
      }

      var input = this.input.transform(event);

      if (void 0 !== input) {
        var AT_TOUCH = "at:" + TOUCH;
        var AT_TOUCH_WITH_STATUS = AT_TOUCH + input.inputType;
        this.emit(AT_TOUCH, input);
        this.emit(AT_TOUCH_WITH_STATUS, input);
        var domEvents = this.options.domEvents;

        if (false !== domEvents) {
          var target = event.target;

          if (null !== target) {
            dispatchDomEvent(target, __assign(__assign({}, input), {
              type: AT_TOUCH
            }), domEvents);
            dispatchDomEvent(target, __assign(__assign({}, input), {
              type: AT_TOUCH_WITH_STATUS
            }), domEvents);
          }
        }

        var cacheComputedGroup = Object.create(null);

        var _loop_1 = function (recognizer) {
          if (recognizer.disabled) return "continue";
          recognizer.computedGroup = cacheComputedGroup;
          recognizer.computeFunctionMap = this_1.cacheComputedFunctionGroup;
          recognizer.recognize(input, function (type, ev) {
            var payload = __assign(__assign(__assign({}, input), ev), {
              type: type,
              baseType: recognizer.name
            });

            Object.freeze(payload);

            if (void 0 === _this.beforeEachHook) {
              emit2(_this, payload);
            } else {
              _this.beforeEachHook(recognizer, function () {
                emit2(_this, payload);
              });
            }
          });
          cacheComputedGroup = recognizer.computedGroup;
          this_1.cacheComputedFunctionGroup = recognizer.computeFunctionMap;
        };

        var this_1 = this;

        try {
          for (var _b = __values(this.recognizers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var recognizer = _c.value;

            _loop_1(recognizer);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    };

    AnyTouch.prototype.beforeEach = function (hook) {
      this.beforeEachHook = hook;
    };

    AnyTouch.prototype.get = function (name) {
      return this.recognizerMap[name];
    };

    AnyTouch.prototype.set = function (options) {
      this.options = __assign(__assign({}, this.options), options);
    };

    AnyTouch.prototype.destroy = function () {
      this.emit('unbind');
      this.listenersMap = {};
    };

    AnyTouch.version = '0.7.1';
    AnyTouch.recognizers = [];
    AnyTouch.recognizerMap = {};

    AnyTouch.use = function (Recognizer, options) {
      use(AnyTouch, Recognizer, options);
    };

    AnyTouch.removeUse = function (recognizerName) {
      removeUse(AnyTouch, recognizerName);
    };

    return AnyTouch;
  }(default_1);

  var getVLength = function (v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  };

  var radianToAngle = function (radian) {
    return radian / Math.PI * 180;
  };

  var getDirection = function (x, y) {
    if (x === y) {
      return NONE;
    } else if (Math.abs(x) > Math.abs(y)) {
      return 0 < x ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } else {
      return 0 < y ? DIRECTION_DOWN : DIRECTION_UP;
    }
  };

  function ComputeDeltaXY() {
    return function (input) {
      var prevInput = input.prevInput;
      var deltaX = 0;
      var deltaY = 0;
      var deltaXYAngle = 0;

      if (void 0 !== prevInput) {
        deltaX = input.x - prevInput.x;
        deltaY = input.y - prevInput.y;

        if (0 !== deltaX || 0 !== deltaY) {
          var deltaXY = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
          deltaXYAngle = Math.round(radianToAngle(Math.acos(Math.abs(deltaX) / deltaXY)));
        }
      }

      return {
        deltaX: deltaX,
        deltaY: deltaY,
        deltaXYAngle: deltaXYAngle
      };
    };
  }

  ComputeDeltaXY._id = "ComputeDeltaXY";

  function computeDistance() {
    var displacementX = 0;
    var displacementY = 0;
    var distanceX = 0;
    var distanceY = 0;
    var distance = 0;
    var overallDirection = NONE;
    return function (input) {
      var inputType = input.inputType,
          startInput = input.startInput;

      if (INPUT_START === inputType) {
        displacementX = 0;
        displacementY = 0;
        distanceX = 0;
        distanceY = 0;
        distance = 0;
        overallDirection = NONE;
      } else if (INPUT_MOVE === inputType) {
        displacementX = Math.round(input.points[0][CLIENT_X] - startInput.points[0][CLIENT_X]);
        displacementY = Math.round(input.points[0][CLIENT_Y] - startInput.points[0][CLIENT_Y]);
        distanceX = Math.abs(displacementX);
        distanceY = Math.abs(displacementY);
        distance = Math.round(getVLength({
          x: distanceX,
          y: distanceY
        }));
        overallDirection = getDirection(displacementX, displacementY);
      }

      return {
        displacementX: displacementX,
        displacementY: displacementY,
        distanceX: distanceX,
        distanceY: distanceY,
        distance: distance,
        overallDirection: overallDirection
      };
    };
  }

  computeDistance._id = "computeDistance";

  function ComputeVAndDir() {
    var velocityX = 0;
    var velocityY = 0;
    var speedX = 0;
    var speedY = 0;
    var direction;

    var _lastValidInput;

    return function (input) {
      if (void 0 !== input) {
        var inputType = input.inputType;
        _lastValidInput = _lastValidInput || input.startInput;
        var deltaTime = input.timestamp - _lastValidInput.timestamp;

        if (INPUT_MOVE === inputType && COMPUTE_INTERVAL < deltaTime) {
          var deltaX = input.x - _lastValidInput.x;
          var deltaY = input.y - _lastValidInput.y;
          speedX = Math.round(deltaX / deltaTime * 100) / 100;
          speedY = Math.round(deltaY / deltaTime * 100) / 100;
          velocityX = Math.abs(speedX);
          velocityY = Math.abs(speedY);
          direction = getDirection(deltaX, deltaY) || direction;
          _lastValidInput = input;
        }
      }

      return {
        velocityX: velocityX,
        velocityY: velocityY,
        speedX: speedX,
        speedY: speedY,
        direction: direction
      };
    };
  }

  ComputeVAndDir._id = "ComputeVAndDir";

  function resetStatus(recognizer) {
    if (-1 !== [STATUS_END, STATUS_CANCELLED, STATUS_RECOGNIZED, STATUS_FAILED].indexOf(recognizer.status)) {
      recognizer.status = STATUS_POSSIBLE;
    }
  }

  function flow(isVaild, activeStatus, inputType) {
    var _a, _b, _c, _d, _e, _f, _g;

    var STATE_MAP = {
      1: (_a = {}, _a[STATUS_POSSIBLE] = (_b = {}, _b[INPUT_MOVE] = STATUS_START, _b), _a[STATUS_START] = (_c = {}, _c[INPUT_MOVE] = STATUS_MOVE, _c[INPUT_END] = STATUS_END, _c[INPUT_CANCEL] = STATUS_CANCELLED, _c), _a[STATUS_MOVE] = (_d = {}, _d[INPUT_MOVE] = STATUS_MOVE, _d[INPUT_END] = STATUS_END, _d[INPUT_CANCEL] = STATUS_CANCELLED, _d), _a),
      0: (_e = {}, _e[STATUS_START] = (_f = {}, _f[INPUT_MOVE] = STATUS_CANCELLED, _f[INPUT_END] = STATUS_END, _f[INPUT_CANCEL] = STATUS_CANCELLED, _f), _e[STATUS_MOVE] = (_g = {}, _g[INPUT_START] = STATUS_FAILED, _g[INPUT_MOVE] = STATUS_CANCELLED, _g[INPUT_END] = STATUS_END, _g[INPUT_CANCEL] = STATUS_CANCELLED, _g), _e)
    };

    if (void 0 !== STATE_MAP[Number(isVaild)][activeStatus]) {
      return STATE_MAP[Number(isVaild)][activeStatus][inputType] || activeStatus;
    } else {
      return activeStatus;
    }
  }

  function recognizeForPressMoveLike(recognizer, input, emit) {
    var isVaild = recognizer.test(input);
    resetStatus(recognizer);
    var inputType = input.inputType;
    recognizer.status = flow(isVaild, recognizer.status, inputType);
    var computed = recognizer.computed;
    recognizer.isRecognized = [STATUS_START, STATUS_MOVE].includes(recognizer.status);
    var name = recognizer.name,
        status = recognizer.status,
        isRecognized = recognizer.isRecognized;

    if (isRecognized) {
      emit(name, computed);
    }

    if (isRecognized || [STATUS_END, STATUS_CANCELLED].includes(recognizer.status)) {
      emit(name + status, computed);
    }

    return isVaild;
  }

  var default_1$4 = function () {
    function default_1(options) {
      this.disabled = false;
      this.status = STATUS_POSSIBLE;
      this.isRecognized = false;
      this.recognizerMap = {};
      this.computedGroup = {};
      this.computed = {};
      this.computeFunctionMap = {};
      this.options = options;
      this.name = this.options.name;
    }

    default_1.prototype.set = function (options) {
      if (void 0 !== options) {
        this.options = __assign(__assign({}, this.options), options);
      }

      return this;
    };

    default_1.prototype.isValidPointLength = function (pointLength) {
      return 0 === this.options.pointLength || this.options.pointLength === pointLength;
    };

    default_1.prototype.compute = function (Cs, input) {
      var e_1, _a;

      var computed = Object.create(null);

      try {
        for (var Cs_1 = __values(Cs), Cs_1_1 = Cs_1.next(); !Cs_1_1.done; Cs_1_1 = Cs_1.next()) {
          var C = Cs_1_1.value;
          var _id = C._id;

          var _b = this,
              computedGroup = _b.computedGroup,
              computeFunctionMap = _b.computeFunctionMap;

          if (void 0 === computeFunctionMap[_id]) {
            computeFunctionMap[_id] = C();
          }

          computedGroup[_id] = computedGroup[_id] || computeFunctionMap[_id](input);

          for (var key in computedGroup[_id]) {
            computed[key] = computedGroup[_id][key];
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (Cs_1_1 && !Cs_1_1.done && (_a = Cs_1.return)) _a.call(Cs_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return computed;
    };

    return default_1;
  }();

  var DEFAULT_OPTIONS$1 = {
    name: 'pan',
    threshold: 10,
    pointLength: 1
  };

  var default_1$5 = function (_super) {
    __extends(default_1, _super);

    function default_1(options) {
      return _super.call(this, __assign(__assign({}, DEFAULT_OPTIONS$1), options)) || this;
    }

    default_1.prototype.test = function (input) {
      var pointLength = input.pointLength;
      var distance = this.computed.distance;
      return (this.isRecognized || this.options.threshold <= distance) && this.isValidPointLength(pointLength);
    };

    default_1.prototype.recognize = function (input, emit) {
      this.computed = this.compute([ComputeVAndDir, computeDistance, ComputeDeltaXY], input);
      var isRecognized = void 0 !== this.computed.direction && recognizeForPressMoveLike(this, input, emit);

      if (isRecognized) {
        emit(this.options.name + this.computed.direction, this.computed);
      }
    };

    return default_1;
  }(default_1$4);

  var Observer = /*#__PURE__*/function () {
    function Observer() {
      _classCallCheck(this, Observer);

      this.observers = {};
    }

    _createClass(Observer, [{
      key: "on",
      value: function on(name, cb) {
        if (!this.observers[name]) {
          this.observers[name] = [];
        }

        this.observers[name].push(cb);
      }
    }, {
      key: "once",
      value: function once(name, cb) {
        var _this = this;

        var wrapper = function wrapper() {
          cb.apply(void 0, arguments);

          _this.off(name, wrapper);
        };

        this.on(name, wrapper);
      }
    }, {
      key: "off",
      value: function off(name, cb) {
        if (!this.observers[name]) {
          return;
        }

        if (Array.isArray(this.observers[name])) {
          var index = this.observers[name].indexOf(cb);

          if (index !== -1) {
            this.observers[name].splice(index, 1);
          }
        }

        if (typeof this.observers[name] === 'function') {
          delete this.observers[name];
        }
      }
    }, {
      key: "emit",
      value: function emit(name) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var observerItem = this.observers[name];

        if (!observerItem) {
          return;
        }

        if (Array.isArray(observerItem)) {
          this.observers[name].forEach(function (cb) {
            cb && cb.apply(void 0, args);
          });
        }

        if (typeof observerItem === 'function') {
          var _this$observers;

          (_this$observers = this.observers)[name].apply(_this$observers, args);
        }
      }
    }]);

    return Observer;
  }();

  /**
   * 获取图片文件信息
   * @param {File} file File对象
   * @return Promise {width,height,base64,size,type,file,img}
   * */
  var getFileImageInfo = function getFileImageInfo(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        var img = new Image();
        img.src = e.target.result;

        img.onload = function () {
          var width = img.width,
              height = img.height;
          resolve({
            width: width,
            height: height,
            base64: e.target.result,
            size: file.size,
            type: file.type,
            file: file,
            img: img
          });
        };

        img.onerror = function (e) {
          console.log('加载图片失败');
          reject(e);
        };
      };

      reader.onerror = function (e) {
        console.log('render图片失败');
        reject(e);
      };
    });
  };
  /**
   * 图片文件缩放
   * @param {File} file File对象
   * @param {Number} maxWidth 图像最大宽度
   * @param {Number} encoderOptions 压缩等级 0-1
   * */

  var compress = function compress(file) {
    var maxWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var encoderOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    return getFileImageInfo(file).then(function (res) {
      var width = res.width,
          height = res.height,
          img = res.img;
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d'); // 缩放图片至合适尺寸

      var cw = width;
      var ch = height;

      if (width > maxWidth) {
        cw = maxWidth;
        ch = maxWidth * height / width;
      } else {
        return file;
      }

      canvas.width = cw;
      canvas.height = ch;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, cw, ch);
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          blob.lastModifiedDate = new Date();
          var f = new File([blob], file.name, {
            type: blob.type
          });
          resolve(f);
        }, file.type, encoderOptions);
      });
    });
  };

  AnyTouch.use(default_1$5);

  var ImageClipper = /*#__PURE__*/function (_Observer) {
    _inherits(ImageClipper, _Observer);

    var _super = _createSuper(ImageClipper);

    function ImageClipper(el) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ImageClipper);

      _this = _super.call(this);
      _this.dpi = window.devicePixelRatio;
      _this.options = options;
      _this.rootDom = el;

      _this.init();

      return _this;
    }

    _createClass(ImageClipper, [{
      key: "init",
      value: function init() {
        this.createDom();
      }
    }, {
      key: "setLoading",
      value: function setLoading(text) {
        var loadingText = text || this.options.loadingText || '加载中';
        var loading = this.rootDom.querySelector('.ic-loading');
        loading.style.display = '';
        loading.innerHTML = loadingText;
      }
    }, {
      key: "closeLoading",
      value: function closeLoading() {
        var loading = this.rootDom.querySelector('.ic-loading');
        loading.style.display = 'none';
      }
    }, {
      key: "createDom",
      value: function createDom() {
        this.rootDom.innerHTML = "\n\t\t<div class=\"ic-wrap image-clipper\">\n\t\t\t<div class=\"ic-loading\"></div>\n\t\t\t<div class=\"clipper-wrap\">\n\t\t\t\t<img src=\"\" class=\"clip-img\" alt=\"\">\n\t\t\t</div>\n\t\t</div>\n\t\t";
        this.clipperWrap = this.rootDom.querySelector('.clipper-wrap');
      }
    }, {
      key: "destruction",
      value: function destruction() {
        if (this.frame) {
          this.clipperWrap.removeChild(this.frame);
        }

        this.clipperWrapData = null;
        this.clipImg = null;
        this.frameData = null;
      }
    }, {
      key: "start",
      value: function start(file) {
        var _this2 = this;

        this.destruction();
        this.setLoading();
        this.file = file;
        return new Promise(function (resolve, reject) {
          compress(file).then(function (file) {
            getFileImageInfo(file).then(function (res) {
              var width = res.width,
                  height = res.height,
                  base64 = res.base64;
              _this2.clipImg = _this2.clipperWrap.querySelector('.clip-img');
              _this2.clipImg.src = base64;
              var w = _this2.clipperWrap.clientWidth;
              _this2.clipperWrapData = {
                width: w,
                height: w * height / width
              };
              _this2.clipperWrap.style.width = _this2.clipperWrapData.width + 'px';
              _this2.clipperWrap.style.height = _this2.clipperWrapData.height + 'px';
              _this2.clipperWrap.style.backgroundImage = "url(".concat(base64, ")");

              _this2.createOperateFrame();

              _this2.closeLoading();
            });
          });
        });
      }
    }, {
      key: "clipper2Canvas",
      value: function clipper2Canvas() {
        var dpi = 1;
        var _this$frameData = this.frameData,
            x = _this$frameData.left,
            y = _this$frameData.top,
            w = _this$frameData.width,
            h = _this$frameData.height;
        var _this$clipperWrapData = this.clipperWrapData,
            width = _this$clipperWrapData.width,
            height = _this$clipperWrapData.height;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        x *= dpi;
        y *= dpi;
        w *= dpi;
        h *= dpi;
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(this.clipImg, -x, -y, width * dpi, height * dpi);
        return canvas;
      }
    }, {
      key: "createOperateFrame",
      value: function createOperateFrame() {
        var frame = document.createElement('div');
        frame.setAttribute('class', 'operate-frame');
        this.frame = frame;
        var _this$clipperWrapData2 = this.clipperWrapData,
            width = _this$clipperWrapData2.width,
            height = _this$clipperWrapData2.height;
        this.setFrame(30, 30, width - 60, height - 60);
        frame.innerHTML = "<div class=\"box\"></div>\n                            <div class=\"lt\"></div>\n                            <div class=\"rt\"></div>\n                            <div class=\"lb\"></div>\n                            <div class=\"rb\"></div>\n                            <div class=\"t\"></div>\n                            <div class=\"r\"></div>\n                            <div class=\"b\"></div>\n                            <div class=\"l\"></div>";
        this.clipperWrap.appendChild(frame);
        this.operateEvent();
      }
    }, {
      key: "operateEvent",
      value: function operateEvent() {
        var _this3 = this;

        var frame = this.frame; // 拖动裁剪框

        var box = frame.querySelector('.box');
        new AnyTouch(box);
        box.addEventListener('pan', function (event) {
          var x = event.displacementX,
              y = event.displacementY;

          _this3.updateFrame(x, y, 0, 0);
        });
        box.addEventListener('panend', function (event) {
          var x = event.displacementX,
              y = event.displacementY;
          var _this3$frameData = _this3.frameData,
              left = _this3$frameData.left,
              top = _this3$frameData.top;
          var offsetWidth = frame.offsetWidth,
              offsetHeight = frame.offsetHeight;

          _this3.setFrame(left + x, top + y, offsetWidth, offsetHeight);
        }); // 拖动上边框

        var t = frame.querySelector('.t');
        new AnyTouch(t);
        t.addEventListener('pan', function (event) {
          var y = event.displacementY;

          _this3.updateFrame(0, y, 0, -y);
        });
        t.addEventListener('panend', function (event) {
          var y = event.displacementY;
          var _this3$frameData2 = _this3.frameData,
              left = _this3$frameData2.left,
              top = _this3$frameData2.top;
          var offsetWidth = frame.offsetWidth,
              offsetHeight = frame.offsetHeight;

          _this3.setFrame(left, top + y, offsetWidth, offsetHeight);
        }); // 拖动下边框

        var b = frame.querySelector('.b');
        new AnyTouch(b);
        b.addEventListener('pan', function (event) {
          var y = event.displacementY;

          _this3.updateFrame(0, 0, 0, y);
        });
        b.addEventListener('panend', function (event) {
          var _this3$frameData3 = _this3.frameData,
              left = _this3$frameData3.left,
              top = _this3$frameData3.top;
          var offsetWidth = frame.offsetWidth,
              offsetHeight = frame.offsetHeight;

          _this3.setFrame(left, top, offsetWidth, offsetHeight);
        }); // 拖动左边框

        var l = frame.querySelector('.l');
        new AnyTouch(l);
        l.addEventListener('pan', function (event) {
          var x = event.displacementX;

          _this3.updateFrame(x, 0, -x, 0);
        });
        l.addEventListener('panend', function (event) {
          var x = event.displacementX;
          var _this3$frameData4 = _this3.frameData,
              left = _this3$frameData4.left,
              top = _this3$frameData4.top;
          var offsetWidth = frame.offsetWidth,
              offsetHeight = frame.offsetHeight;

          _this3.setFrame(left + x, top, offsetWidth, offsetHeight);
        }); // 拖动右边框

        var r = frame.querySelector('.r');
        new AnyTouch(r);
        r.addEventListener('pan', function (event) {
          var x = event.displacementX;

          _this3.updateFrame(0, 0, x, 0);
        });
        r.addEventListener('panend', function (event) {
          var _this3$frameData5 = _this3.frameData,
              left = _this3$frameData5.left,
              top = _this3$frameData5.top;
          var offsetWidth = frame.offsetWidth,
              offsetHeight = frame.offsetHeight;

          _this3.setFrame(left, top, offsetWidth, offsetHeight);
        }); // 拖动左上

        var lt = frame.querySelector('.lt');
        new AnyTouch(lt);
        lt.addEventListener('pan', function (event) {
          var x = event.displacementX,
              y = event.displacementY;

          _this3.updateFrame(x, y, -x, -y);
        });
        lt.addEventListener('panend', function (event) {
          var x = event.displacementX,
              y = event.displacementY;
          var _this3$frameData6 = _this3.frameData,
              left = _this3$frameData6.left,
              top = _this3$frameData6.top;
          var offsetWidth = frame.offsetWidth,
              offsetHeight = frame.offsetHeight;

          _this3.setFrame(left + x, top + y, offsetWidth, offsetHeight);
        }); // 拖动右上

        var rt = frame.querySelector('.rt');
        new AnyTouch(rt);
        rt.addEventListener('pan', function (event) {
          var x = event.displacementX,
              y = event.displacementY;

          _this3.updateFrame(0, y, x, -y);
        });
        rt.addEventListener('panend', function (event) {
          var x = event.displacementX,
              y = event.displacementY;
          var _this3$frameData7 = _this3.frameData,
              left = _this3$frameData7.left,
              top = _this3$frameData7.top;
          var offsetWidth = frame.offsetWidth,
              offsetHeight = frame.offsetHeight;

          _this3.setFrame(left, top + y, offsetWidth, offsetHeight);
        }); // 拖动左下

        var lb = frame.querySelector('.lb');
        new AnyTouch(lb);
        lb.addEventListener('pan', function (event) {
          var x = event.displacementX,
              y = event.displacementY;

          _this3.updateFrame(x, 0, -x, y);
        });
        lb.addEventListener('panend', function (event) {
          var x = event.displacementX,
              y = event.displacementY;
          var _this3$frameData8 = _this3.frameData,
              left = _this3$frameData8.left,
              top = _this3$frameData8.top;
          var offsetWidth = frame.offsetWidth,
              offsetHeight = frame.offsetHeight;

          _this3.setFrame(left + x, top, offsetWidth, offsetHeight);
        }); // 拖动右下

        var rb = frame.querySelector('.rb');
        new AnyTouch(rb);
        rb.addEventListener('pan', function (event) {
          var x = event.displacementX,
              y = event.displacementY;

          _this3.updateFrame(0, 0, x, y);
        });
        rb.addEventListener('panend', function (event) {
          var x = event.displacementX,
              y = event.displacementY;
          var _this3$frameData9 = _this3.frameData,
              left = _this3$frameData9.left,
              top = _this3$frameData9.top;
          var offsetWidth = frame.offsetWidth,
              offsetHeight = frame.offsetHeight;

          _this3.setFrame(left, top, offsetWidth, offsetHeight);
        });
      }
    }, {
      key: "setClipImgPosition",
      value: function setClipImgPosition(x, y, w, h) {
        var right = w + x;
        var bottom = h + y;
        this.clipImg.style.clip = "rect(".concat(y, "px, ").concat(right, "px, ").concat(bottom, "px, ").concat(x, "px)");
      }
    }, {
      key: "setFrameCommon",
      value: function setFrameCommon(x, y, w, h) {
        this.frame.style.left = x + 'px';
        this.frame.style.top = y + 'px';
        this.frame.style.width = w + 'px';
        this.frame.style.height = h + 'px';
        this.setClipImgPosition(x, y, w, h);
        return [x, y, w, h];
      }
    }, {
      key: "updateFrame",
      value: function updateFrame(x, y, w, h) {
        var left = this.frameData.left + x;
        var top = this.frameData.top + y;
        var width = this.frameData.width + w;
        var height = this.frameData.height + h;

        var _this$verifyInfo = this.verifyInfo(left, top, width, height),
            _this$verifyInfo2 = _slicedToArray(_this$verifyInfo, 4),
            a = _this$verifyInfo2[0],
            b = _this$verifyInfo2[1],
            c = _this$verifyInfo2[2],
            d = _this$verifyInfo2[3];

        this.setFrameCommon(a, b, c, d, true);
      }
    }, {
      key: "setFrame",
      value: function setFrame(x, y, w, h) {
        var _this$verifyInfo3 = this.verifyInfo(x, y, w, h);

        var _this$verifyInfo4 = _slicedToArray(_this$verifyInfo3, 4);

        x = _this$verifyInfo4[0];
        y = _this$verifyInfo4[1];
        w = _this$verifyInfo4[2];
        h = _this$verifyInfo4[3];
        this.frameData = {
          left: x,
          top: y,
          width: w,
          height: h
        };
        this.setFrameCommon(x, y, w, h);
        this.emit('change');
        this.clipper2Canvas();
      }
    }, {
      key: "verifyInfo",
      value: function verifyInfo(x, y, w, h) {
        var _this$clipperWrapData3 = this.clipperWrapData,
            cw = _this$clipperWrapData3.width,
            ch = _this$clipperWrapData3.height;

        if (x + w >= cw) {
          x = cw - w;
        }

        if (x <= 0) {
          x = 0;
        }

        if (y + h >= ch) {
          y = ch - h;
        }

        if (y <= 0) {
          y = 0;
        }

        if (w > cw) {
          w = cw;
        }

        if (h > ch) {
          h = ch;
        }

        return [x, y, w, h];
      }
    }, {
      key: "clipper2File",
      value: function clipper2File() {
        var _this4 = this;

        var encoderOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        return new Promise(function (resolve) {
          var _this4$file = _this4.file,
              name = _this4$file.name,
              type = _this4$file.type;

          _this4.clipper2Canvas().toBlob(function (blob) {
            var file = new File([blob], name, {
              type: type
            });
            resolve(file);
          }, type, encoderOptions);
        });
      }
    }]);

    return ImageClipper;
  }(Observer);

  return ImageClipper;

})));
//# sourceMappingURL=ImageClipper.js.map
