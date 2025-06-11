# API de Gestion de Bibliothèque

Cette API RESTful permet de gérer une bibliothèque de livres en utilisant Express.js et SQLite.

## Installation

1. Cloner le projet
2. Installer les dépendances :
```bash
npm install
```
3. Démarrer le serveur :
```bash
npm start
```

Le serveur démarre sur le port 3000.

## Endpoints de l'API

### Livres

#### Récupérer tous les livres
- **GET** `/api/books`
- Paramètres de pagination :
  - `offset` : nombre d'éléments à sauter (défaut: 0)
  - `limit` : nombre d'éléments par page (défaut: 10)
- Paramètres de tri :
  - `sort` : champ de tri ('title' ou 'publication_year')

#### Récupérer un livre par ID
- **GET** `/api/books/:id`

#### Créer un nouveau livre
- **POST** `/api/books`
- Body :
```json
{
    "title": "Titre du livre",
    "author": "Nom de l'auteur",
    "isbn": "ISBN du livre",
    "publication_year": 2024
}
```

#### Mettre à jour un livre
- **PUT** `/api/books/:id`
- Body : mêmes champs que pour la création

#### Supprimer un livre
- **DELETE** `/api/books/:id`

### Recherche

#### Rechercher des livres
- **GET** `/api/books/search`
- Paramètre :
  - `q` : terme de recherche (recherche dans le titre, l'auteur et l'ISBN)

### Statistiques

#### Obtenir les statistiques
- **GET** `/api/books/stats`
- Retourne :
  - Nombre total de livres
  - Nombre de livres par année
  - Nombre de livres par auteur

## Structure du Projet

```
.
├── config/
│   └── database.js      # Configuration de la base de données
├── controller/
│   └── bookController.js # Logique métier
├── model/
│   ├── book.js          # Modèle Book
│   └── stats.js         # Modèle Stats
├── router/
│   └── bookRouter.js    # Routes de l'API
├── index.js             # Point d'entrée de l'application
└── package.json         # Dépendances du projet
```

## Exemples d'Utilisation

### Pagination et Tri
```
GET /api/books?offset=0&limit=10&sort=title
```

### Recherche
```
GET /api/books/search?q=harry
```

### Statistiques
```
GET /api/books/stats
``` 