// index.js lancement du server express
const express = require('express');
const app = express();
const pcRouter = require('./router/pcRouter');

const port = 3004;

app.use(express.json())

// Je vais dire à mon application quel routeur utiliser ne fonction de la route
app.use('/pc', pcRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

