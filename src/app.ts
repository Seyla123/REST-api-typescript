import express, { Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const app = express();

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

  
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to my API");
});

app.use('/api/v1', routes)


export default app;