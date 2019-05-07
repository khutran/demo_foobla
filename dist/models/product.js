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

var Product = _sequelize4.default.define('product', {
    name: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    sku: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    status: {
        type: _sequelize2.default.INTEGER,
        allowNull: false
    },
    amount: {
        type: _sequelize2.default.FLOAT,
        allowNull: false
    },
    description: {
        allowNull: true,
        type: _sequelize2.default.TEXT
    }
}, {
    tableName: 'products',
    underscored: true,
    paranoid: false
});

exports.default = Product;