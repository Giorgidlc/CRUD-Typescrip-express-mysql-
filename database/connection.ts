import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
//carga archivo .env
dotenv.config()

const db = new Sequelize('crud', 'root', process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  //logging: false
});

export default db;
