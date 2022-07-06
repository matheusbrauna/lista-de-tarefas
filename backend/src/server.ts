import { config } from 'dotenv';
import express, { Express } from 'express';
import { routes } from './routes';
import { connectToDatabase } from './database';
import cors from 'cors';

config();
connectToDatabase();

const app: Express = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () =>
  console.log(`⚡ Backend started at http://localhost:${port}`),
);
