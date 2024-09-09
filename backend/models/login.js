import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const ChatModel = db.define('users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    freezeTableName: true
});

export default ChatModel;

(async () => {
    try {
        await db.sync();
        console.log("Database synchronized successfully");
    } catch (error) {
        console.error("Failed to synchronize database:", error);
    }
})();
