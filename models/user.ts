import { DataTypes } from 'sequelize';
import db from '../database/connection';

const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
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