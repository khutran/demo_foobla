import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';


const PaymentMethod = sequelize.define(
    'payment_methods',
    {
        name: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'payment_methods',
        underscored: true,
        paranoid: false
    }
);


export default PaymentMethod;
