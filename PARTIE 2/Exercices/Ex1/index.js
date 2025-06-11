// Créer une API RESTful qui permet de gérer une liste de tâches. Les utilisateurs peuvent 
// ajouter, mettre à jour, récupérer et supprimer des tâches à l'aide des méthodes HTTP GET, POST, PUT et DELETE.

// Une tâche est composé de :
// titre string required,
// description string,
// date_debut : date,
// date_fin : date,
// done : boolean

const express = require('express');
const app = express();
const port = 3005;

// Middleware
app.use(express.json());

// Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes);

// Démarrage du serveur
app.listen(port, () => console.log('App running on port', port));