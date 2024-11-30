import { Request, Response } from 'express';
export const createTodo = (req: Request, res:Response) => {
    const { title } = req.body;
    res.status(201).json({
        message: 'Todo created successfully',	
        title
    });
}