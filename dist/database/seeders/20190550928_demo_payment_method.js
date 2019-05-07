'use strict';

module.exports = {
    up: function up(queryInterface, Sequelize) {
        var items = [{
            name: 'cash',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            name: 'transfer',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            name: 'paypal',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            name: 'international transfer',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            name: 'stripe',
            created_at: new Date(),
            updated_at: new Date()
        }];

        return queryInterface.bulkInsert('payment_methods', items);
    },

    down: function down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('payment_methods', null, {});
    }
};