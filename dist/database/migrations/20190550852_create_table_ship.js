'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    up: function up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return _promise2.default.all([queryInterface.createTable('ship', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                method: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                price: {
                    type: Sequelize.FLOAT,
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
            })]);
        });
    },

    down: function down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return _promise2.default.all([queryInterface.dropTable('ship')]);
        });
    }
};