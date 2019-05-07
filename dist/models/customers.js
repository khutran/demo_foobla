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

var Customer = _sequelize4.default.define('customer', {
    user_id: {
        type: _sequelize2.default.INTEGER
    },
    last_name: {
        type: _sequelize2.default.STRING
    },
    first_name: {
        type: _sequelize2.default.STRING
    },
    address: {
        type: _sequelize2.default.STRING
    },
    phone: {
        type: _sequelize2.default.STRING
    },
    country: {
        type: _sequelize2.default.STRING
    }
}, {
    tableName: 'customers',
    underscored: true,
    paranoid: false
});

exports.default = Customer;