'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return Promise.all([
                queryInterface.createTable('user_orders', {
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
                    order_id: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        validate: {
                            notEmpty: true
                        }
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
                })
            ]).then(function () {
                return Promise.all([
                    queryInterface.addConstraint('user_orders', ['user_id'], {
                        type: 'FOREIGN KEY',
                        references: {
                            table: 'users',
                            field: 'id'
                        },
                        onDelete: 'cascade',
                        onUpdate: 'cascade'
                    }),
                    queryInterface.addConstraint('user_orders', ['order_id'], {
                        type: 'FOREIGN KEY',
                        references: {
                            table: 'orders',
                            field: 'id'
                        },
                        onDelete: 'cascade',
                        onUpdate: 'cascade'
                    }),
                ])
            });
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return Promise.all([queryInterface.dropTable('user_orders')]);
        });
    }
};
