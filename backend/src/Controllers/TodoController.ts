import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../models/Todo';
import { ITodo } from '../types/todo';

export const TodoController = {
  async getTodos(req: Request, res: Response): Promise<void> {
    try {
      const todos: ITodo[] = await Todo.find();
      res.status(200).json({ todos });
    } catch (err) {
      throw err;
    }
  },

  async addTodo(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as Pick<ITodo, '_id' | 'title' | 'completed'>;

      const todo: ITodo = new Todo({
        _id: uuidv4(),
        title: body.title,
        completed: body.completed,
      });

      const newTodo: ITodo = await todo.save();
      const allTodos: ITodo[] = await Todo.find();

      res.status(201).json({
        message: 'Todo added successfully',
        todo: newTodo,
        todos: allTodos,
      });
    } catch (err) {
      throw err;
    }
  },

  async updateTodo(req: Request, res: Response): Promise<void> {
    try {
      const {
        params: { id },
        body,
      } = req;
      const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
        { _id: id },

        body,
      );
      const allTodos: ITodo[] = await Todo.find();
      res.status(200).json({
        message: 'Todo updated successfully',
        todo: updateTodo,
        todos: allTodos,
      });
    } catch (err) {
      throw err;
    }
  },

  async deleteTodo(req: Request, res: Response): Promise<void> {
    try {
      const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
        req.params.id,
      );
      const allTodos: ITodo[] = await Todo.find();
      res.status(200).json({
        message: 'Todo deleted successfully',
        todo: deletedTodo,
        todos: allTodos,
      });
    } catch (err) {
      throw err;
    }
  },
};
