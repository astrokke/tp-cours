const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://rddinel:EHPdVf4th1xm0sTq@dbnosql.xgipeia.mongodb.net/?retryWrites=true&w=majority&appName=dbnosql');
        console.log('MongoDB connecté avec succès');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB; 