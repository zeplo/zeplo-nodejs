"use strict";

var _stream = _interopRequireDefault(require("stream"));

var _fn = require("../fn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.PORT = 3099;
jest.mock('http');
describe('fn mode', () => {
  test('passes string body to fn', async () => {
    const req = new _stream.default.PassThrough();
    const userFn = jest.fn();
    req.end(Buffer.from('Hello'));
    req.headers = {};
    await (0, _fn.requestHandler)(userFn, req, null);
    expect(userFn).toHaveBeenCalledTimes(1);
    expect(userFn.mock.calls[0][0]).toEqual('Hello');
  });
  test('passes json body to fn', async () => {
    const req = new _stream.default.PassThrough();
    const userFn = jest.fn();
    req.end(Buffer.from('{"a":1}'));
    req.headers = {};
    await (0, _fn.requestHandler)(userFn, req, null);
    expect(userFn).toHaveBeenCalledTimes(1);
    expect(userFn.mock.calls[0][0]).toEqual({
      a: 1
    });
  });
});