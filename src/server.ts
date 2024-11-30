import express, { Request, Response } from 'express';
import db from './config/database.config';

db.sync().then(()=>{
    console.log('connected to database');
})

const app = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to my API");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
