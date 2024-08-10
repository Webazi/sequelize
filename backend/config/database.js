import { Sequelize } from "sequelize";

const db = new Sequelize ('chat','root','',{
    host: 'localhost',
    dialect:"mysql"
});

export default db;