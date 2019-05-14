"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaults = {
  url: 'https://api.zeplo.io',
  request: {
    json: true
  },
  requireAuth: true,
  debug: false
};

var Client =
/*#__PURE__*/
function () {
  function Client(apiToken, options) {
    _classCallCheck(this, Client);

    this.options = _objectSpread({}, defaults, options); // if (!apiToken && this.options.requireAuth) {
    //   throw new Error('Missing required first paramater `apiToken`')
    // }

    this.token = apiToken;
  }

  _createClass(Client, [{
    key: "request",
    value: function () {
      var _request2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, cb) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", (0, _util.withCallback)(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  var query, reqObj;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          query = req.query || {};

                          if (_this.options.projectId) {
                            query.projectId = _this.options.projectId;
                          }

                          if (_this.options.project) {
                            query.project = _this.options.project;
                          }

                          reqObj = _objectSpread({}, _this.options.request, {
                            auth: _this.token && {
                              bearer: _this.token
                            },
                            baseUrl: _this.options.url
                          }, req, {
                            qs: query
                          });

                          _this._log('request', reqObj);

                          return _context.abrupt("return", (0, _requestPromiseNative.default)(reqObj));

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), cb));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function request(_x, _x2) {
        return _request2.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "_log",
    value: function _log(event) {
      if (this.options.debug) {
        var _console;

        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }

        var stringy = params.map(function (param) {
          return JSON.stringify(param);
        }); // eslint-disable-next-line no-console

        (_console = console).log.apply(_console, [event].concat(_toConsumableArray(stringy)));
      }
    }
  }]);

  return Client;
}();

var _default = Client;
exports.default = _default;