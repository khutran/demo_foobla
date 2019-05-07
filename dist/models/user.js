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

var _customers = require('./customers');

var _customers2 = _interopRequireDefault(_customers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _sequelize4.default.define('user', {
  email: {
    type: _sequelize2.default.STRING,
    defaultValue: ''
  },
  password: {
    type: _sequelize2.default.STRING,
    defaultValue: ''
  },
  status: {
    type: _sequelize2.default.INTEGER,
    defaultValue: 1
  },
  last_login: {
    type: _sequelize2.default.DATE
  }
}, {
  tableName: 'users',
  underscored: true,
  paranoid: false
});

// User.associate = model => {
User.hasOne(_customers2.default);
// User.hasOne(model.payment);
// User.belongsToMany(model.order, { through: model.user_orders });
// }

exports.default = User;