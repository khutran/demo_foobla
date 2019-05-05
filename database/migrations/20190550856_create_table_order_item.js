'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return Promise.all([
                queryInterface.createTable('order_items', {
                    id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                    },
                    product_id: {
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
                    quantity: {
                        type: Sequelize.INTEGER,
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
                })
            ]).then(function () {
                return Promise.all([
                    queryInterface.addConstraint('order_items', ['product_id'], {
                        type: 'FOREIGN KEY',
                        references: {
                            table: 'products',
                            field: 'id'
                        },
                        onDelete: 'cascade',
                        onUpdate: 'cascade'
                    }),
                    queryInterface.addConstraint('order_items', ['order_id'], {
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
            return Promise.all([queryInterface.dropTable('order_items')]);
        });
    }
};
