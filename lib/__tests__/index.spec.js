"use strict";

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('index.spec.js', () => {
  test('exports http api', () => {
    expect(_.default.http).toEqual(expect.any(Function));
    expect(_.default.http.json).toEqual(expect.any(Function));
    expect(_.default.http.text).toEqual(expect.any(Function));
    expect(_.default.http.buffer).toEqual(expect.any(Function));
    expect(_.default.http.send).toEqual(expect.any(Function));
  });
});