const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date_debut: {
        type: DataTypes.DATE,
        allowNull: true
    },
    date_fin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Task; 