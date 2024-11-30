import express from 'express';
import * as todoController from '../controller/todoController';

const router = express.Router();

router
    .route('/')
    .post(todoController.createTodo);

export default router;