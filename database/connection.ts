import { Sequelize } from "sequelize";

const db = new Sequelize('crud', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  //logging: false
});

export default db;
