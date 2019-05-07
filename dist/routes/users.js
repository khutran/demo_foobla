'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var update = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var id, data, controller, result, customer;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            data = req.body;
            controller = new _UserController2.default();
            _context.next = 5;
            return controller.Model().findOne({
              where: {
                id: id
              },
              include: [{ model: _customers2.default }]
            });

          case 5:
            result = _context.sent;

            if (result) {
              _context.next = 8;
              break;
            }

            throw new Exception('User not found', 1000);

          case 8:
            _context.next = 10;
            return result.getCustomer();

          case 10:
            customer = _context.sent;
            _context.next = 13;
            return customer.update(data);

          case 13:
            _context.next = 15;
            return customer.reload();

          case 15:

            res.json(customer);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function update(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _UserController = require('../controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

var _asyncMiddleware = require('../Middleware/asyncMiddleware');

var _asyncMiddleware2 = _interopRequireDefault(_asyncMiddleware);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _customers = require('../models/customers');

var _customers2 = _interopRequireDefault(_customers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.put('/:id', (0, _asyncMiddleware2.default)(update));

module.exports = router;