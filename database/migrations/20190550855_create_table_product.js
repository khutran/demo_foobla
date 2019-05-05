'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return Promise.all([
                queryInterface.createTable('products', {
                    id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                    },
                    name: {
                        type: Sequelize.STRING,
                        allowNull: false
                    },
                    sku: {
                        type: Sequelize.STRING,
                        allowNull: false
                    },
                    status: {
                        type: Sequelize.INTEGER,
                        allowNull: false
                    },
                    amount: {
                        type: Sequelize.FLOAT,
                        allowNull: false
                    },
                    description: {
                        allowNull: true,
                        type: Sequelize.TEXT
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
            ]);
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(function handleTransaction(t) {
            return Promise.all([queryInterface.dropTable('products')]);
        });
    }
};
