'use strict';

module.exports = {
    up: function up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('ship', [{
            method: 'byce',
            price: 10,
            created_at: new Date(),
            updated_at: new Date()
        }]);
    },
    down: function down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ship', null, {});
    }
};