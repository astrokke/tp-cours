// Ecrivez la fonction displayOsMessage() qui détecte le systeme d'exploitation
// Cette fonction affichera un message différend pour Windows, macOS et Linux
// Appelez la fonction pour la tester
// Il faudra trouver quel est la chaîne de retour pour chacun des systèmes

const os = require('os');

function displayOsMessage() {
    const platform = os.platform();

    switch (platform) {
        case 'linux':
            console.log('Vous êtes sous Linux.');
            break;
        case 'win32':
            console.log('Vous êtes sous Windows.');
            break;
        case 'darwin':
            console.log('Vous êtes sous macOS.');
            break;
        default:
            console.log('Système d\'exploitation non reconnu.');
    }
}

// Appel de la fonction pour afficher le message
displayOsMessage();
