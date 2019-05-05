import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';


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

Order.associate = function (model) {
    Order.belongsToMany(model.Product, { through: model.OrderItem });
}

export default Order;
