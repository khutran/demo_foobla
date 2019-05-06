import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';
import Product from './product';
import User from './user';
import UserOrder from './user_order';
import OrderItem from './order_item';


const Order = sequelize.define(
    'order',
    {
        code: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.INTEGER,
        },
        note: {
            type: Sequelize.TEXT,
        },
        ship_id: {
            type: Sequelize.INTEGER
        },
        shipping_address: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.FLOAT
        },
        payment_method_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: 'orders',
        underscored: true,
        paranoid: false
    }
);

// Order.associate = function (model) {
Order.belongsToMany(Product, { through: OrderItem });
Order.belongsToMany(User, { through: UserOrder });
// }

export default Order;
