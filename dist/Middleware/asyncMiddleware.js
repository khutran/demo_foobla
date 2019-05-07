"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asyncMiddleware = function asyncMiddleware(fn) {
    return function (req, res, next) {
        _promise2.default.resolve(fn(req, res, next)).catch(next);
    };
};

module.exports = asyncMiddleware;