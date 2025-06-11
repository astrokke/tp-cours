let Pcs = [
    {
        id: 1,
        name: 'PC 1',
        description: 'PC 1 description'
    },
    {
        id: 2,
        name: 'PC 2',
        description: 'PC 2 description'
    },
    {
        id: 3,
        name: 'PC 3',
        description: 'PC 3 description'
    }
];


const pcController = {
    getPc: (req, res) => {
        // res.send('getPc');
        res.json(Pcs);
    },
    getPcById: (req, res) => {
        const pc = Pcs.find(pc => pc.id === parseInt(req.params.id));
        if (!pc) {
            return res.status(404).json({ message: 'PC not found' });
        }
        res.json(pc); 
    },
    createPc: (req, res) => {
        const newPc = {
            id: Date.now(),
            name: req.body.name,
            description: req.body.description
        };
        Pcs.push(newPc);
        res.status(201).json(newPc);
    },
    updatePc: (req, res) => {
        // On récupere l'identifiant à mettre à jour 
        const pc = Pcs.find(pc => pc.id === parseInt(req.params.id));

        // S'il existe pas on renvoie un message d'erreur
        if (!pc) {
            return res.status(404).json({ message: 'PC not found' });
        }

        // Sinon on met à jour le pc avec les données transmises
        pc.name = req.body.name;
        pc.description = req.body.description;
        res.json(pc);
    },
    deletePc: (req, res) => {
        const pc = Pcs.find(pc => pc.id === parseInt(req.params.id));
        if (!pc) {
            return res.status(404).json({ message: 'PC not found' });
        }
        Pcs = Pcs.filter(pc => pc.id !== parseInt(req.params.id));
        res.status(204).send();
    }
}

module.exports = pcController;