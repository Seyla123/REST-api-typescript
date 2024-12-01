import express from 'express';
import * as todoController from '../controller/todoController';

const router = express.Router();

router
    .route('/')
    .post(todoController.createTodo)
    .get(todoController.getAllTodos);

router
    .route('/:id')
    .get(todoController.getTodoById)
    .patch(todoController.updateTodo)
    .delete(todoController.deleteTodo);

export default router;