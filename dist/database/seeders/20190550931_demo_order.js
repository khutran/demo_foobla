'use strict';

module.exports = {
    up: function up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('orders', [{
            code: 'xxxxxx',
            status: 1,
            note: 'no note',
            ship_id: 1,
            payment_method_id: 1,
            amount: 20,
            shipping_address: 'dong anh - ha noi',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            code: 'yyyyy',
            status: 1,
            note: 'no note',
            ship_id: 1,
            payment_method_id: 2,
            amount: 20,
            shipping_address: 'nam hong -dong anh - ha noi',
            created_at: new Date(),
            updated_at: new Date()
        }]);
    },
    down: function down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('orders', null, {});
    }
};