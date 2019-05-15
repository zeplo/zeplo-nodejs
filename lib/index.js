"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "http", {
  enumerable: true,
  get: function () {
    return _http.default;
  }
});
Object.defineProperty(exports, "fn", {
  enumerable: true,
  get: function () {
    return _fn.default;
  }
});
exports.default = void 0;

var _http = _interopRequireDefault(require("./http"));

var _fn = _interopRequireDefault(require("./fn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  http: _http.default,
  fn: _fn.default
};
exports.default = _default;