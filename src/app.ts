import express, { Request, Response } from 'express';
import db from './config/database.config';
import morgan from 'morgan';

db.sync().then(()=>{
    console.log('connected to database');
})

const app = express();

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    app.use(morgan('dev'));
  }
  
app.use(express.json());

app.post('/api/todos', (req: Request, res: Response) => {
    const body = req.body;
    res.send(body);
})
app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to my API");
});


export default app;