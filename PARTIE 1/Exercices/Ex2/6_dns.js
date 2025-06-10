// Utilisez dns.lookup pour obtenir l'adresse IP du NDD m2iformation.fr
// Récupérez les enregistrements MX du même domaine (permet de spécifier les serveurs de messagerie pour un domaine).
// Affichez le résultat dans la console 

const dns = require('dns');
const domain = 'm2iformation.fr';

dns.lookup(domain, (err,ip) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(ip)
})

dns.resolveMx(domain, (err,enregistrement) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(enregistrement)
})

