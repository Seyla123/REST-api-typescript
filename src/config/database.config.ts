import { Sequelize } from "sequelize";
import path from "path"; // Import path module

const db = new Sequelize({
    storage: path.resolve(__dirname, 'database.sqlite'), // Use an absolute path for SQLite storage
    dialect: 'sqlite',
    logging: false,
});

export default db;
