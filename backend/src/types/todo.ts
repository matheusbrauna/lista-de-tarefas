import { Document } from 'mongoose';

export interface ITodo extends Document {
  _id: string;
  title: string;
  completed: boolean;
}
