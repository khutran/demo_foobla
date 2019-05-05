'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return Promise.all([
                queryInterface.createTable('orders', {
                    id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                    },
                    code: {
                        type: Sequelize.STRING,
                        allowNull: false,
                    },
                    status: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                    },
                    note: {
                        type: Sequelize.TEXT,
                        validate: {
                            notEmpty: true
                        }
                    },
                    shipping_method: {
                        allowNull: false,
                        type: Sequelize.STRING
                    },
                    shipping_address: {
                        allowNull: false,
                        type: Sequelize.STRING
                    },
                    amount: {
                        allowNull: false,
                        type: Sequelize.FLOAT
                    },
                    ship_price: {
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
                })
            ]).then(function () {
                return queryInterface.addConstraint('orders', ['payment_method_id'], {
                    type: 'FOREIGN KEY',
                    references: {
                        table: 'payment_methods',
                        field: 'id'
                    },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                });
            });
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return Promise.all([queryInterface.dropTable('orders')]);
        });
    }
};
