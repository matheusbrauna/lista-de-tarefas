import { NextFunction, Request, Response } from 'express';
import { validate as isUuid } from 'uuid';
import Todo from '../models/Todo';

export const TodoMiddleware = {
  async validateId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: 'Invalid ID.' });
    }

    try {
      const todo = await Todo.findById(id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found.' });
      }
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
      }
    }

    next();
  },
};
