import { Sequelize } from "sequelize";

const db = new Sequelize('crud', 'root', 'Jd011$$$', {
  host: 'localhost',
  dialect: 'mysql',
  //logging: false
});

export default db;
