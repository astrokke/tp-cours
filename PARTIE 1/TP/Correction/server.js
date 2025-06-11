const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const dns = require('dns');
const url = require('url');

const PORT = 3003;
const PUBLIC_DIR = path.join(__dirname, 'public');

// Créer le dossier public s'il n'existe pas
if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR);
}

// Fonction pour servir les fichiers statiques
function serveStaticFile(req, res) {
    let filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url);
    
    // Vérifier si le fichier existe
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
            return;
        }

        // Lire et servir le fichier
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('500 Internal Server Error');
                return;
            }

            // Déterminer le type de contenu
            const ext = path.extname(filePath);
            const contentType = {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'text/javascript',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg'
            }[ext] || 'text/plain';

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    });
}

// Fonction pour gérer le monitoring système
function handleStatus(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    const sendStatus = () => {
        const cpuUsage = os.loadavg()[0];
        const totalMem = os.totalmem();
        const freeMem = os.freemem();
        const uptime = os.uptime();

        const data = {
            cpu: cpuUsage,
            memory: {
                total: totalMem,
                free: freeMem,
                used: totalMem - freeMem
            },
            uptime: uptime
        };

        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    // Envoyer les données immédiatement
    sendStatus();

    // Mettre à jour toutes les secondes
    const interval = setInterval(sendStatus, 1000);

    // Nettoyer l'intervalle quand la connexion est fermée
    req.on('close', () => {
        clearInterval(interval);
    });
}

// Fonction pour résoudre les noms de domaine
function handleResolve(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const domain = parsedUrl.query.domain;

    if (!domain) {
        res.writeHead(400);
        res.end('Domain parameter is required');
        return;
    }

    // Ajouter le protocole si nécessaire
    let domainToResolve = domain;
    if (!domain.startsWith('http://') && !domain.startsWith('https://')) {
        domainToResolve = `http://${domain}`;
    }

    // Valider l'URL
    try {
        new URL(domainToResolve);
    } catch (err) {
        res.writeHead(400);
        res.end('Invalid URL format');
        return;
    }

    // Résoudre le nom de domaine
    dns.lookup(domain, (err, address, family) => {
        if (err) {
            res.writeHead(404);
            res.end(`Could not resolve domain: ${err.message}`);
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            domain,
            ip: address,
            family: family === 4 ? 'IPv4' : 'IPv6'
        }));
    });
}

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/status')) {
        handleStatus(req, res);
    } 
    else if (req.url.startsWith('/resolve')) {
        handleResolve(req, res);
    } 
    else {
        serveStaticFile(req, res);
    }
});

// Démarrer le serveur
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
}); 