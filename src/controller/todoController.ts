import { Request, Response } from 'express';

// create todo
export const createTodo = (req: Request, res:Response) => {
    const { title } = req.body;
    res.status(201).json({
        message: 'Todo created successfully',	
        title
    });
}

// get all todos
export const getAllTodos = (req: Request, res:Response) => {
    res.status(200).json({
        message: 'All todos fetched successfully',	
    });
}

// update todo
export const updateTodo = (req: Request, res:Response) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    res.status(200).json({
        message: 'Todo updated successfully',	
        title,
        id,
        completed
    });
}

// delete todo
export const deleteTodo = (req: Request, res:Response) => {
    const { id } = req.params;
    res.status(200).json({
        message: 'Todo deleted successfully',	
    });
}

// get todo by id
export const getTodoById = (req: Request, res:Response) => {
    const { id } = req.params;
    res.status(200).json({
        message: 'Todo fetched successfully',	
        id
    });
}