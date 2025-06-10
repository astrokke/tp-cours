// Nous allons simuler un système de chat simple avec des messages recus et envoyés

// 1. Créez un événement personnalisé messageReceived qui accepte deux arguments : message et username et 
// ajoutez un gestionnaire d'événements pour messageReceived (emitter.on)

// 2. Simulez l'émission de l'événement messageReceived à partir de plusieurs utilisateurs 
// C'est-à-dire (Créer une fonction sendMessage qui prend un username et un message en param et l'appeler plusieurs fois)
// On affichera le nom de l'utilisateur puis le message dans la console 

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageReceived', (message, username) => {
    console.log(`Message received ${message} ${username}`);
})

function sendMessage(message, username) {
    emitter.emit('messageReceived',message,username)
}

sendMessage('Romain', 'Bonjour tout le monde!');
sendMessage('Tom', 'Salut Romain, comment ça va?');
sendMessage('Sylvain', 'Bonjour à tous!');

// Ajoutez plus de messages pour tester
sendMessage('Romain', 'Je vais bien, merci Tom.');
sendMessage('Tom', 'Content de l\'entendre!');