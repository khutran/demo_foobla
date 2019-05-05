import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';


const Ship = sequelize.define(
    'ship',
    {
        method: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: 'ships',
        underscored: true,
        paranoid: false
    }
);


export default Ship;
