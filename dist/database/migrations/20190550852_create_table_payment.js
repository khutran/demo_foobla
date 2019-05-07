'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    up: function up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return _promise2.default.all([queryInterface.createTable('payments', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    }
                },
                payment_method_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    }
                },
                status: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                info: {
                    type: Sequelize.STRING,
                    allowNull: false
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
                return _promise2.default.all([queryInterface.addConstraint('payments', ['user_id'], {
                    type: 'FOREIGN KEY',
                    references: {
                        table: 'users',
                        field: 'id'
                    },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                }), queryInterface.addConstraint('payments', ['payment_method_id'], {
                    type: 'FOREIGN KEY',
                    references: {
                        table: 'payment_methods',
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
            return _promise2.default.all([queryInterface.dropTable('payments')]);
        });
    }
};