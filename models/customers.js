import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';


const Customer = sequelize.define(
    'customer',
    {
        user_id: {
            type: Sequelize.INTEGER,
        },
        last_name: {
            type: Sequelize.STRING,
        },
        first_name: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING,
        }
    },
    {
        tableName: 'customers',
        underscored: true,
        paranoid: false
    }
);


export default Customer;
