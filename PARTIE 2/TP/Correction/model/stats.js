const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Stats = sequelize.define('Stats', {
    total_books: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    books_by_year: {
        type: DataTypes.JSON,
        defaultValue: {}
    },
    books_by_author: {
        type: DataTypes.JSON,
        defaultValue: {}
    }
});

module.exports = Stats; 