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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaymentMethod = _sequelize4.default.define('payment_methods', {
    name: {
        type: _sequelize2.default.STRING
    }
}, {
    tableName: 'payment_methods',
    underscored: true,
    paranoid: false
});

exports.default = PaymentMethod;