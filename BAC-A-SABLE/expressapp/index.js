// index.js lancement du server express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Pour utiliser les variables d'environnement
const dotenv = require('dotenv');
dotenv.config();

const pcRouter = require('./router/pcRouter');
const port = process.env.PORT;

// Middleware
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://rddinel:EHPdVf4th1xm0sTq@dbnosql.xgipeia.mongodb.net/?retryWrites=true&w=majority&appName=dbnosql')
    .then((res) => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    })

// Je vais dire à mon application quel routeur utiliser ne fonction de la route
app.use('/pc', pcRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

