import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';


const OrderItem = sequelize.define(
    'order_items',
    {
        product_id: {
            type: Sequelize.INTEGER
        },
        order_id: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: 'order_items',
        underscored: true,
        paranoid: false
    }
);


export default OrderItem;
