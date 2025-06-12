const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const connectDB = require('./config/database');

const app = express();

// Connexion à la base de données
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', taskRoutes);

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({ message: 'Route non trouvée' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Une erreur est survenue sur le serveur' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
}); 