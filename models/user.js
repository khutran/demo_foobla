import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';


const User = sequelize.define(
  'user',
  {
    email: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    password: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    last_login: {
      type: Sequelize.DATE
    }
  },
  {
    tableName: 'users',
    underscored: true,
    paranoid: false
  }
);

User.associate = function (model) {
  User.hasOne(model.Customer);
  User.hasOne(model.Payment);
  User.belongsToMany(model.Order, { through: model.UserOrder });
}

export default User;
