const express = require('express');
const db = require('./config/database');
const bookRouter = require('./router/bookRouter');

const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Routes pour les livres
app.use('/api/books', bookRouter);

// Synchronisation de la base de données et démarrage du serveur
db.sync().then(() => {
    app.listen(port, () => {
        console.log(`Serveur démarré sur le port ${port}`);
    });
}).catch(error => {
    console.error('Erreur de connexion à la base de données:', error);
}); 