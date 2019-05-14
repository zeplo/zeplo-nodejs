"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "json", {
  enumerable: true,
  get: function () {
    return _micro.json;
  }
});
Object.defineProperty(exports, "text", {
  enumerable: true,
  get: function () {
    return _micro.text;
  }
});
Object.defineProperty(exports, "send", {
  enumerable: true,
  get: function () {
    return _micro.send;
  }
});
Object.defineProperty(exports, "buffer", {
  enumerable: true,
  get: function () {
    return _micro.buffer;
  }
});
exports.default = void 0;

var _micro = _interopRequireWildcard(require("micro"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _micro.default;
exports.default = _default;