const { Sequelize } = require('sequelize');

// Configuration de la base de données SQLite
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

module.exports = db; 