Créer une API RESTful qui permet de gérer une liste de tâches. Les utilisateurs peuvent ajouter, mettre à jour, récupérer et supprimer des tâches à l'aide des méthodes HTTP GET, POST, PUT et DELETE.

Une tâche est composé de :
titre string required,
description string,
date_debut : date,
date_fin : date,
done : boolean

Pour le moment, il s’agit simplement de tout faire dans le fichier index.js
Également, aucune BDD n’est encore mise en place, on stockera donc nos tâches dans un tableau (non persistent)
Aucun middleware n’est à mettre en place
