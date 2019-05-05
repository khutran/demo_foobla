'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', [
            {
                name: 'Sp1',
                sku: 'sp1',
                amount: 10,
                description: '',
                status: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Sp2',
                sku: 'sp2',
                amount: 10,
                description: '',
                status: 1,
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('products', null, {});
    }
};
