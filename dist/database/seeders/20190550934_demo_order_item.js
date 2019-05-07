'use strict';

module.exports = {
    up: function up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('order_items', [{
            order_id: 1,
            product_id: 1,
            quantity: 2,
            created_at: new Date(),
            updated_at: new Date()
        }, {
            order_id: 2,
            product_id: 2,
            quantity: 2,
            created_at: new Date(),
            updated_at: new Date()
        }]);
    },
    down: function down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('order_items', null, {});
    }
};