// On a besoin de mongoose pour créer un modèle avec mongodb
const mongoose = require('mongoose');

// Création du schéma avec name et description
// l'identifiant est automatiquement créé par mongodb
const pcSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

// Export du modèle
module.exports = mongoose.model('Pc', pcSchema);
