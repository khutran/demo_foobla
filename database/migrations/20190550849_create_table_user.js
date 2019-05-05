'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(function handleTransaction(t) {
      return Promise.all([
        queryInterface.createTable('users', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          email: {
            type: Sequelize.STRING,
            unique: 'compositeIndex',
            allowNull: false,
            validate: {
              isEmail: true,
              notEmpty: true,
              len: [1, 255]
            }
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notEmpty: true
            }
          },
          status: {
            type: Sequelize.INTEGER,
            validate: {
              notEmpty: true
            }
          },
          last_login: {
            allowNull: true,
            type: Sequelize.DATE
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
      return Promise.all([queryInterface.dropTable('users')]);
    });
  }
};
