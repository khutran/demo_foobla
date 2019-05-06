import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';
import Customer from './customers';


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

// User.associate = model => {
User.hasOne(Customer);
// User.hasOne(model.payment);
// User.belongsToMany(model.order, { through: model.user_orders });
// }

export default User;
