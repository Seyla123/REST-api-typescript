import { Request, Response } from "express";
import { Todo } from "../model";
import { v4 as uuidv4 } from "uuid";

// create todo
export const createTodo = async (req: Request, res: Response): Promise<void> => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({
      message: "Title is required",
    });
  }
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
export const getAllTodos = async (req: Request, res: Response): Promise<void> => {
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
  export const updateTodo = async(req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if(!id){
      res.status(400).json({
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
      res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Todo updated successfully",
    });
  };

  // delete todo
  export const deleteTodo =async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if(!id){
     res.status(400).json({
        message: "Id is required",
      });
    }
    const todo = await Todo.destroy({ where: { id } });
    if (!todo) {
      res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Todo deleted successfully",
    });
  };
  
  
  // get todo by id
  export const getTodoById = async(req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if(!id){
      res.status(400).json({
        message: "Id is required",
      });
    }
    const todo = await Todo.findByPk(id);
    if (!todo) {
      res.status(404).json({
        message: "Todo not found",
    })
  }
    res.status(200).json({
      message: "Todo fetched successfully",
      data:todo
    });
  };
