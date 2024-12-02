import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import pg from 'pg';
// const db = new Sequelize({
//     storage: './database.sqlite', // Use an absolute path for SQLite storage
//     dialect: 'sqlite',
//     logging: false,
// });

dotenv.config();

const db = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true, // Enforce SSL connection
            rejectUnauthorized: false, // Disable certificate validation (optional, only for development)
        },
    },
    dialectModule: pg
});

const connectDatabase = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connectDatabase();
export default db;