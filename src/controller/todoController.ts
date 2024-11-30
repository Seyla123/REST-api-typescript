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

// get all todos
export const getAllTodos = async (req: Request, res: Response) => {
    const todos = await Todo.findAll();
    if (todos.length === 0) {
      res.status(201).json({
        message: "No todos found",
        data: [],
      });
    }
    res.status(200).json({
      message: "All todos fetched successfully",
      data: todos,
    });
  };

 
  // update todo
  export const updateTodo = async(req: Request, res: Response) => {
    const { id } = req.params;
    if(!id){
      return res.status(400).json({
        message: "Id is required",
      });
    }
    const { title, completed } = req.body;
    const [todo] =await Todo.update(
      {
        title,
        completed,
      },
      { where: { id } }
    );
    console.log(todo);
    
    if (todo === 0) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Todo updated successfully",
    });
  };
  