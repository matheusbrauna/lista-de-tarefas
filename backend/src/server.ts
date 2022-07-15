import { config } from 'dotenv';
import express, { Express } from 'express';
import { routes } from './routes';
import { connectToDatabase } from './database';
import cors from 'cors';

config();
connectToDatabase();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(routes);
