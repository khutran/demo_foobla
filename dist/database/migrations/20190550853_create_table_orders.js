'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    up: function up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return _promise2.default.all([queryInterface.createTable('orders', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                code: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                status: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                note: {
                    type: Sequelize.TEXT
                },
                ship_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER
                },
                shipping_address: {
                    allowNull: false,
                    type: Sequelize.STRING
                },
                amount: {
                    allowNull: false,
                    type: Sequelize.FLOAT
                },
                payment_method_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER
                },
                deleted_at: {
                    allowNull: true,
                    type: Sequelize.DATE
                },
                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updated_at: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            })]).then(function () {
                return _promise2.default.all([queryInterface.addConstraint('orders', ['payment_method_id'], {
                    type: 'FOREIGN KEY',
                    references: {
                        table: 'payment_methods',
                        field: 'id'
                    },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                }), queryInterface.addConstraint('orders', ['ship_id'], {
                    type: 'FOREIGN KEY',
                    references: {
                        table: 'ship',
                        field: 'id'
                    },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                })]);
            });
        });
    },

    down: function down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return _promise2.default.all([queryInterface.dropTable('orders')]);
        });
    }
};