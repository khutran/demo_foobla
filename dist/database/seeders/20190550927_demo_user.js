'use strict';

module.exports = {
    up: function up(queryInterface, Sequelize) {
        //bcrypt password for "secret"
        var password = '$2a$08$KHJeGvYdcD0iCv4bkyLDh.lWrMZ1/ol3AXE9TAJUAq8OWiilR84cW';
        return queryInterface.bulkInsert('users', [{
            email: 'khutran@gmail.com',
            password: password,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        }]);
    },
    down: function down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};