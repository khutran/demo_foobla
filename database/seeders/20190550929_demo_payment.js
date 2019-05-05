'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('payments', [
            {
                user_id: 1,
                status: 1,
                payment_method_id: 1,
                info: "info card",
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('payments', null, {});
    }
};
