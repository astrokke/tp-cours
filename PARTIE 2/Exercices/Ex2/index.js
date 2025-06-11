const express = require('express');
const db = require('./config/database');
const taskRouter = require('./router/taskRouter');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/tasks', taskRouter);

db.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
}); 