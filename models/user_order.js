import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';


const UserOrder = sequelize.define(
    'user_orders',
    {
        user_id: {
            type: Sequelize.INTEGER
        },
        order_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: 'user_orders',
        underscored: true,
        paranoid: false
    }
);


export default UserOrder;
