import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';


const Payment = sequelize.define(
    'payment',
    {
        user_id: {
            type: Sequelize.INTEGER,
        },
        payment_method_id: {
            type: Sequelize.INTEGER,
        },
        status: {
            type: Sequelize.INTEGER,
        },
        info: {
            type: Sequelize.STRING,
        }
    },
    {
        tableName: 'payments',
        underscored: true,
        paranoid: false
    }
);


export default Payment;
