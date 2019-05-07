'use strict';

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _orders = require('./orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

router.use('/users', _users2.default);
router.use('/orders', _orders2.default);

module.exports = router;