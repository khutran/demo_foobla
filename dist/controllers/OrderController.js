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

var _Controller2 = require('./Controller');

var _order = require('../models/order');

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = function (_Controller) {
    (0, _inherits3.default)(OrderController, _Controller);

    function OrderController() {
        (0, _classCallCheck3.default)(this, OrderController);
        return (0, _possibleConstructorReturn3.default)(this, (OrderController.__proto__ || (0, _getPrototypeOf2.default)(OrderController)).apply(this, arguments));
    }

    (0, _createClass3.default)(OrderController, [{
        key: 'Model',
        value: function Model() {
            return _order2.default;
        }
    }]);
    return OrderController;
}(_Controller2.Controller);

exports.default = OrderController;
;