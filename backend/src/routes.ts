import express from 'express';
import { TodoController } from './Controllers/TodoController';
import { TodoMiddleware } from './Middlewares/TodoMiddleware';

export const routes = express.Router();

routes.get('/todos', TodoController.getTodos);
routes.post('/todos', TodoController.addTodo);
routes.put('/todos/:id', TodoMiddleware.validateId, TodoController.updateTodo);
routes.delete(
  '/todos/:id',
  TodoMiddleware.validateId,
  TodoController.deleteTodo,
);
