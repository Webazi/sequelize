import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

export const ChatModel = db.define('chats', {
    chat: DataTypes.STRING,
    from: DataTypes.STRING
}, {
    freezeTableName: true
});



export const login = db.define('Users', {
    username:{
        type: DataTypes.STRING,
        allowNull:false

    },
    password:{
        type: DataTypes.STRING,
        allowNull:false

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // Kolom ini juga tidak boleh NULL
      },

}, {
    freezeTableName: true
});


export const Otp = db.define('Otp', {
    code:{
        type: DataTypes.STRING,
        allowNull:false

    },
    valid:{
        type: DataTypes.BOOLEAN,
        allowNull:false

    },
    expired: {
        type: DataTypes.DATE,
        allowNull: false, // Kolom ini juga tidak boleh NULL
      },

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
