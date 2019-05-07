'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    up: function up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return _promise2.default.all([queryInterface.createTable('customers', {
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
                last_name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                first_name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                address: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                phone: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                country: {
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
                return queryInterface.addConstraint('customers', ['user_id'], {
                    type: 'FOREIGN KEY',
                    references: {
                        table: 'users',
                        field: 'id'
                    },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                });
            });
        });
    },

    down: function down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return _promise2.default.all([queryInterface.dropTable('customers')]);
        });
    }
};