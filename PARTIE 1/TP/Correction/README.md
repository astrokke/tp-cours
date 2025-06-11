# TP Node.js - Modules fondamentaux

Ce projet est une implémentation d'un serveur HTTP Node.js qui démontre l'utilisation des modules fondamentaux de Node.js.

## Fonctionnalités

1. **Serveur de fichiers statiques**
   - Sert les fichiers du dossier `public`
   - Gestion des erreurs 404 et 500
   - Support de différents types de fichiers (HTML, CSS, JS, images, etc.)

2. **Monitoring système**
   - Endpoint `/status` qui affiche en temps réel :
     - Utilisation CPU
     - Mémoire disponible
     - Temps de fonctionnement
   - Utilise Server-Sent Events pour les mises à jour en temps réel

3. **Résolution DNS**
   - Endpoint `/resolve` pour résoudre les noms de domaine
   - Validation des URLs
   - Ajout automatique du protocole si nécessaire

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre machine
2. Clonez ce dépôt
3. Dans le dossier du projet, exécutez :
   ```bash
   npm install
   ```

## Utilisation

1. Démarrez le serveur :
   ```bash
   node server.js
   ```

2. Ouvrez votre navigateur et accédez à :
   ```
   http://localhost:3000
   ```

## Endpoints disponibles

- `GET /` : Page d'accueil avec interface utilisateur
- `GET /status` : Flux d'événements pour le monitoring système
- `GET /resolve?domain=example.com` : Résolution DNS d'un nom de domaine

## Structure du projet

```
.
├── server.js          # Serveur principal
├── public/           # Dossier des fichiers statiques
│   └── index.html    # Page d'accueil
└── README.md         # Documentation
``` 