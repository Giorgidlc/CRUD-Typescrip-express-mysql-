"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const User = connection_1.default.define('User', {
    name_user: {
        type: sequelize_1.DataTypes.STRING,
    },
    email_user: {
        type: sequelize_1.DataTypes.STRING,
    },
    state_user: {
        type: sequelize_1.DataTypes.BOOLEAN,
    }
});
exports.default = User;
//# sourceMappingURL=user.js.map