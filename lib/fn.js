"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fnToHttp;
exports.requestHandler = requestHandler;

var _http = _interopRequireDefault(require("./http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const asyncJson = async str => {
  return JSON.parse(str);
};
/* istanbul ignore next */


function fnToHttp(fn) {
  const s = (0, _http.default)((req, res) => requestHandler(fn, req, res));
  return s.listen(process.env.PORT);
}

async function requestHandler(fn, req, res) {
  const body = await _http.default.text(req);
  const json = await asyncJson(body).catch(() => null);
  return fn(json || body, {
    req,
    res
  });
}