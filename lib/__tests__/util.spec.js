"use strict";

var _util = require("../util");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('util', function () {
  test('resolve and call callback',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var cb, resp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cb = jest.fn();
            _context2.next = 3;
            return (0, _util.withCallback)(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", true);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), cb);

          case 3:
            resp = _context2.sent;
            expect(resp).toEqual(true);
            expect(cb).toHaveBeenCalledWith(null, true);
            expect(cb).toHaveBeenCalledTimes(1);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('reject and call callback',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var cb, error, resp;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            cb = jest.fn();
            error = new Error('Thrown error!');
            resp = (0, _util.withCallback)(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      throw error;

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })), cb);
            _context4.next = 5;
            return expect(resp).rejects.toThrowError('Thrown error!');

          case 5:
            expect(cb).toHaveBeenCalledWith(error);
            expect(cb).toHaveBeenCalledTimes(1);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('reject and call callback, non-async fn',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var cb, error, resp;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            cb = jest.fn();
            error = new Error('Thrown error!');
            resp = (0, _util.withCallback)(function () {
              throw error;
            }, cb);
            _context5.next = 5;
            return expect(resp).rejects.toThrowError('Thrown error!');

          case 5:
            expect(cb).toHaveBeenCalledWith(error);
            expect(cb).toHaveBeenCalledTimes(1);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  describe('mergeUpdates', function () {
    var date = new Date();
    var obj;

    var CustomClass = function CustomClass() {
      _classCallCheck(this, CustomClass);

      this.id = 'abc';
      this.options = {
        a: 1,
        b: {
          c: 2
        }
      };
      this.date = date;
    };

    beforeEach(function () {
      obj = new CustomClass();
    });
    test('merge updates with class instance object', function () {
      (0, _util.mergeUpdates)(obj, {
        id: '123'
      });
      expect(obj.id).toEqual('123');
    });
    test('merge updates with class instance object (deep)', function () {
      (0, _util.mergeUpdates)(obj, {
        id: '123',
        options: {
          b: {
            c: 1
          }
        }
      });
      expect(obj).toMatchObject({
        id: '123',
        date: date,
        options: {
          a: 1,
          b: {
            c: 1
          }
        }
      });
    });
    test('merge updates with class instance object (with date)', function () {
      var newDate = new Date();
      (0, _util.mergeUpdates)(obj, {
        id: '123',
        date: newDate
      });
      expect(obj).toMatchObject({
        id: '123',
        date: newDate,
        options: {
          a: 1,
          b: {
            c: 2
          }
        }
      });
    });
    test('no merge for unknown props', function () {
      (0, _util.mergeUpdates)(obj, {
        randomProp: 10
      });
      expect(obj).toMatchObject(obj);
    });
  });
});