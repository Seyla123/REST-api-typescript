import db from './config/database.config';
import app from './app';

const PORT = 8000;

db.sync().then(() => {
    console.log('Connected to database');
});

app.listen(PORT, () => {
    console.log('Server is running on port 8000');
    console.log(
        `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode...`
      );
});