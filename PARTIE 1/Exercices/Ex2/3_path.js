// Créez un chemin complet vers un fichier appelé example.txt dans un dossier nommé assets
// Affichez le nom du répertoire du chemin complet
// Affichez le nom du fichier à partir du chemin complet
// Affichez l'extension du fichier

const path = require('path');

const filePath = path.join(__dirname, 'assets/example.txt');
console.log('Chemin ', filePath)

console.log('nom répertoire ', path.dirname(filePath))
console.log('nom fichier ', path.basename(filePath))
console.log('extension fichier ', path.extname(filePath))
