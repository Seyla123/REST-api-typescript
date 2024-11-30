import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";


interface TodoAttriutes {
    id: string,
    title: string,
    completed: boolean,
}

export class Todo extends Model<TodoAttriutes> { };
Todo.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, 
    {
        sequelize: db,
        tableName: "todos",
    }
)
