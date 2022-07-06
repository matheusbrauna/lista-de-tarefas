import { Schema, model } from 'mongoose';
import { ITodo } from '../types/todo';

const todoSchema: Schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default model<ITodo>('Todo', todoSchema);
