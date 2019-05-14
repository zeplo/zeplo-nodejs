"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCallback = withCallback;
exports.mergeUpdates = mergeUpdates;

var _promiseCallbacks = require("promise-callbacks");

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function withCallback(_x, _x2) {
  return _withCallback.apply(this, arguments);
}

function _withCallback() {
  _withCallback = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(fn, cb) {
    var promiseGen, promise;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Convert fn to async
            promiseGen =
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", fn());

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function promiseGen() {
                return _ref.apply(this, arguments);
              };
            }();

            promise = promiseGen();
            if (cb) (0, _promiseCallbacks.asCallback)(promise, cb);
            return _context2.abrupt("return", promise);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _withCallback.apply(this, arguments);
}

function mergeUpdates(obj, updates) {
  Object.keys(updates).forEach(function (key) {
    var originalVal = obj[key]; // Don't update unknwon props (we set all known props to null)

    if (originalVal === undefined) return; // Test for plain object

    if (_typeof(originalVal) === 'object' && originalVal.constructor === Object) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = _merge.default.recursive(originalVal, updates[key]);
      return;
    } // eslint-disable-next-line no-param-reassign


    obj[key] = updates[key];
  });
  return obj;
}