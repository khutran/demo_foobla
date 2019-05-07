'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequelize3 = require('../config/sequelize');

var _sequelize4 = _interopRequireDefault(_sequelize3);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _product = require('./product');

var _product2 = _interopRequireDefault(_product);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _user_order = require('./user_order');

var _user_order2 = _interopRequireDefault(_user_order);

var _order_item = require('./order_item');

var _order_item2 = _interopRequireDefault(_order_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = _sequelize4.default.define('order', {
    code: {
        type: _sequelize2.default.STRING
    },
    status: {
        type: _sequelize2.default.INTEGER
    },
    note: {
        type: _sequelize2.default.TEXT
    },
    ship_id: {
        type: _sequelize2.default.INTEGER
    },
    shipping_address: {
        type: _sequelize2.default.STRING
    },
    amount: {
        type: _sequelize2.default.FLOAT
    },
    payment_method_id: {
        type: _sequelize2.default.INTEGER
    }
}, {
    tableName: 'orders',
    underscored: true,
    paranoid: false
});

// Order.associate = function (model) {
Order.belongsToMany(_product2.default, { through: _order_item2.default });
Order.belongsToMany(_user2.default, { through: _user_order2.default });
// }

exports.default = Order;