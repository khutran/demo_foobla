'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('customers', [
            {
                user_id: 1,
                last_name: 'khu',
                first_name: 'tran',
                address: 'dong anh - ha noi',
                phone: '123456789',
                country: 'viet nam',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('customers', null, {});
    }
};
