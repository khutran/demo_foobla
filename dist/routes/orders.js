'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var index = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var page, per_page, status, controller, params, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        page = !_lodash2.default.isUndefined(req.query.page) ? parseInt(req.query.page) : 1;
                        per_page = !_lodash2.default.isUndefined(req.query.per_page) ? parseInt(req.query.per_page) : 20;
                        status = req.query.status;
                        controller = new _OrderController2.default();
                        params = {
                            where: {},
                            offset: (page - 1) * per_page,
                            limit: per_page,
                            include: [{ model: _user2.default, attributes: ['email'] }, { model: _product2.default }]
                        };

                        if (status) {
                            params['where'] = {
                                status: status
                            };
                        }
                        _context.next = 8;
                        return controller.Model().findAndCountAll(params);

                    case 8:
                        result = _context.sent;

                        res.json({
                            data: result.rows, paginate: {
                                current_page: page,
                                per_page: per_page,
                                total_pages: Math.ceil(result.count / per_page),
                                total: result.count
                            }
                        });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function index(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var changeStatus = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var id, status, controller, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        id = req.params.id;
                        status = req.body.status;
                        controller = new _OrderController2.default();
                        _context2.next = 5;
                        return controller.Model().findOne({
                            where: { id: id }
                        });

                    case 5:
                        result = _context2.sent;

                        if (result) {
                            _context2.next = 8;
                            break;
                        }

                        throw new _exceptions.Exception('order not found', 1000);

                    case 8:
                        _context2.next = 10;
                        return result.update({ status: status });

                    case 10:
                        res.json({ data: 'success' });

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function changeStatus(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var changeNote = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var id, note, controller, result;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        id = req.params.id;
                        note = req.body.note;
                        controller = new _OrderController2.default();
                        _context3.next = 5;
                        return controller.Model().findOne({
                            where: { id: id }
                        });

                    case 5:
                        result = _context3.sent;

                        if (result) {
                            _context3.next = 8;
                            break;
                        }

                        throw new _exceptions.Exception('order not found', 1000);

                    case 8:
                        _context3.next = 10;
                        return result.update({ note: note });

                    case 10:
                        res.json({ data: 'success' });

                    case 11:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function changeNote(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var _asyncMiddleware = require('../Middleware/asyncMiddleware');

var _asyncMiddleware2 = _interopRequireDefault(_asyncMiddleware);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _OrderController = require('../controllers/OrderController');

var _OrderController2 = _interopRequireDefault(_OrderController);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _product = require('../models/product');

var _product2 = _interopRequireDefault(_product);

var _exceptions = require('@nsilly/exceptions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (0, _asyncMiddleware2.default)(index));
router.put('/:id/status', (0, _asyncMiddleware2.default)(changeStatus));
router.put('/:id/note', (0, _asyncMiddleware2.default)(changeNote));

module.exports = router;