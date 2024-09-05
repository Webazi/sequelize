import { Sequelize } from "sequelize";

const db = new Sequelize ('chat','root','Aji19027*',{
    host: 'localhost',
    dialect:"mysql"
});

export default db;