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
Object.defineProperty(exports, "send", {
  enumerable: true,
  get: function () {
    return _http.send;
  }
});
Object.defineProperty(exports, "json", {
  enumerable: true,
  get: function () {
    return _http.json;
  }
});
Object.defineProperty(exports, "text", {
  enumerable: true,
  get: function () {
    return _http.text;
  }
});
Object.defineProperty(exports, "buffer", {
  enumerable: true,
  get: function () {
    return _http.buffer;
  }
});
Object.defineProperty(exports, "fn", {
  enumerable: true,
  get: function () {
    return _fn.default;
  }
});

var _http = _interopRequireWildcard(require("./http"));

var _fn = _interopRequireDefault(require("./fn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }