'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _Controller2 = require('./Controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserController = function (_Controller) {
  (0, _inherits3.default)(UserController, _Controller);

  function UserController() {
    (0, _classCallCheck3.default)(this, UserController);
    return (0, _possibleConstructorReturn3.default)(this, (UserController.__proto__ || (0, _getPrototypeOf2.default)(UserController)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserController, [{
    key: 'Model',
    value: function Model() {
      return _user2.default;
    }
  }]);
  return UserController;
}(_Controller2.Controller);

exports.default = UserController;
;