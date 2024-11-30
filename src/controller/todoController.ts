import { Request, Response } from "express";
import { Todo } from "../model";
import { v4 as uuidv4 } from "uuid";

// create todo
export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  const todo = await Todo.create({
    title: title,
    id: uuidv4(),
    completed: false,
  });
  res.status(201).json({
    message: "Todo created successfully",
    data: todo,
  });
};
