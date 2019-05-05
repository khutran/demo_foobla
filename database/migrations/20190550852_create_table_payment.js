'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return Promise.all([
                queryInterface.createTable('payments', {
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
                })
            ]).then(function () {
                return Promise.all([
                    queryInterface.addConstraint('payments', ['user_id'], {
                        type: 'FOREIGN KEY',
                        references: {
                            table: 'users',
                            field: 'id'
                        },
                        onDelete: 'cascade',
                        onUpdate: 'cascade'
                    }),
                    queryInterface.addConstraint('payments', ['payment_method_id'], {
                        type: 'FOREIGN KEY',
                        references: {
                            table: 'payment_methods',
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
            return Promise.all([queryInterface.dropTable('payments')]);
        });
    }
};
