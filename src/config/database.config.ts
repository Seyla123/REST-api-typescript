import { Sequelize } from "sequelize";

const db = new Sequelize({
    storage: './database.sqlite', // Use an absolute path for SQLite storage
    dialect: 'sqlite',
    logging: false,
});

export default db;
