import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import _ from 'lodash';


const Product = sequelize.define(
    'product',
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sku: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        amount: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        description: {
            allowNull: true,
            type: Sequelize.TEXT
        }
    },
    {
        tableName: 'products',
        underscored: true,
        paranoid: false
    }
);


export default Product;
