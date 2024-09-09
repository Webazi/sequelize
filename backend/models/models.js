import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

export const ChatModel = db.define('chats', {
    chat: DataTypes.STRING,
    from: DataTypes.STRING
}, {
    freezeTableName: true
});



export const login = db.define('users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    freezeTableName: true
});





(async () => {
    try {
        await db.sync();
        console.log("Database synchronized successfully");
    } catch (error) {
        console.error("Failed to synchronize database:", error);
    }
})();
