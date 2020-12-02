import {Sequelize} from 'sequelize';
import Dotenv from 'dotenv';

Dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE as string, process.env.DB_USER as string, process.env.DB_PASSWOORD as string,{
    host: process.env.DB_HOST as string,
    dialect: 'postgres'
});

sequelize.sync();

export default sequelize;