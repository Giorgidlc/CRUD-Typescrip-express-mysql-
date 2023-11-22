import { DataTypes } from 'sequelize';
import db from '../database/connection';

const User = db.define('User', {
  name_user: {
    type: DataTypes.STRING,
  },
  email_user: {
    type: DataTypes.STRING,
  },
  state_user: {
    type: DataTypes.BOOLEAN,
  }
})

export default User;