// Nous allons créer une URL en manipulant les attributs de l'objet URL
// 1. Créez l'url 'https://www.example.com'
// 2. Ajoutez path '/unepage'
// 3. ajouter un argument de recherhe '?query=marecherche'
// 4. Ajoutez le hash '#section2'

const url = require('url');

const myUrl = new URL('https://www.example.com');

myUrl.pathname = '/unepage';
myUrl.search = '?query=marecherche';
myUrl.hash = '#section2'

console.log(myUrl.toString());