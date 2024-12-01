import express from 'express';
const router = express.Router();

import todoRoute from './todoRoute';

router.use('/todos', todoRoute);

export default router;