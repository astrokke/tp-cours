// Lisez le contenu du fichier example.txt situé dans le dossier assets et affichez-le dans la console.
// Créez un nouveau fichier appelé output.txt dans le même dossier et écrivez-y une chaîne de caractères : Ceci est un nouveau fichier créé avec Node.js
// Supprimez le fichier output.txt que vous venez de créer.

const fs = require('fs');

// Lire le contenu d'un fichier 

fs.readFile('assets/example.txt', 'utf-8', (err,data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data);
})  


// Ecrire dans un fichier 

const contentToWrite = 'Ceci est un nouveau fichier créé avec Node.js';

fs.writeFile('assets/output.txt', contentToWrite, (err,data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log("Contenu écrit avec succes")
    console.log(data)
});


// Supprimer



// 3. Supprimer le fichier créé
fs.unlink('assets/output.txt', (err) => {
    if (err) {
        console.log('Erreur lors de la suppression du fichier:', err);
        return;
    }
    console.log('Fichier output.txt supprimé');
});
