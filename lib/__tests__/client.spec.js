"use strict";

var _promiseCallbacks = require("promise-callbacks");

var _request = _interopRequireDefault(require("request"));

var _tasks = _interopRequireDefault(require("../resources/tasks"));

var _runs = _interopRequireDefault(require("../resources/runs"));

var _client = _interopRequireDefault(require("../client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('request');
jest.mock('../resources/tasks');
var apiKey = 'testKey';
describe('client', function () {
  var client;
  beforeEach(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            jest.clearAllMocks();
            client = new _client.default(apiKey);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('client is instance of Client', function () {
    expect(client).toBeInstanceOf(_client.default);
  });
  test('error if no apiKey provided to client', function () {
    expect(function () {
      return new _client.default();
    }).toThrowErrorMatchingSnapshot();
  });
  test('creates tasks API on client', function () {
    expect(client.tasks).toBeInstanceOf(_tasks.default);
    expect(client.tasks.create).toEqual(expect.any(Function));
    expect(client.tasks.update).toEqual(expect.any(Function));
    expect(client.tasks.delete).toEqual(expect.any(Function));
    expect(client.tasks.get).toEqual(expect.any(Function));
  });
  test('creates runs API on client', function () {
    expect(client.runs).toBeInstanceOf(_runs.default);
    expect(client.runs.get).toEqual(expect.any(Function));
  });
  test('sends a request',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var req;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = {
              method: 'GET',
              url: '/path',
              body: {
                a: 1
              },
              query: {
                limit: 1
              }
            };
            client.request(req);
            _context2.next = 4;
            return (0, _promiseCallbacks.nextTick)();

          case 4:
            expect(_request.default).toHaveBeenCalledTimes(1);
            expect(_request.default).toHaveBeenCalledWith(expect.objectContaining({
              auth: {
                user: apiKey,
                pass: ''
              },
              query: {
                limit: 1
              },
              body: {
                a: 1
              },
              url: '/path'
            }));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('sends a request with projectId',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var req;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            client = new _client.default(apiKey, {
              projectId: 'x123'
            });
            req = {
              method: 'GET',
              url: '/path',
              body: {
                a: 1
              },
              query: {
                limit: 1
              }
            };
            client.request(req);
            _context3.next = 5;
            return (0, _promiseCallbacks.nextTick)();

          case 5:
            expect(_request.default).toHaveBeenCalledTimes(1);
            expect(_request.default).toHaveBeenCalledWith(expect.objectContaining({
              auth: {
                user: apiKey,
                pass: ''
              },
              query: {
                limit: 1,
                projectId: 'x123'
              },
              body: {
                a: 1
              },
              url: '/path'
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  /* eslint-disable no-console */

  test('logs in debug mode', function () {
    var _log = console.log;
    client = new _client.default(apiKey, {
      debug: true
    });
    console.log = jest.fn();

    client._log('test', 'param1', {
      a: 1
    });

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log.mock.calls).toMatchSnapshot();
    console.log = _log;
  });
  test('does not log in non-debug mode', function () {
    var _log = console.log;
    console.log = jest.fn();

    client._log('test', 'param1', {
      a: 1
    });

    expect(console.log).not.toHaveBeenCalled();
    console.log = _log;
  });
  /* eslint-enable no-console */
});