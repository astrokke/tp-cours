const Pc = require('../model/pc');

const pcController = {


    // Find permet de récupérer tous les pc
    getPc: (req, res) => {
        Pc.find()
        .then(pcs => {
            res.status(200).json(pcs);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
    },

    // FindById permet de récupérer un pc par son id
    getPcById: (req, res) => {
        Pc.findById(req.params.id)
        .then(pc => {
            res.status(200).json(pc);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
    },

    // create permet de créer un nouveau pc
    createPc: (req, res) => {

        // création d'un nouveau pc avec les données de la requête
        const newPc = new Pc({
            name: req.body.name,
            description: req.body.description
        });

        // création du nouveau pc
        newPc.save()
        .then(pc => {
            res.status(201).json(pc);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });

    },

    // updateOne permet de mettre à jour un pc par son id
    updatePc: (req, res) => {
        // Pc.findByIdAndUpdate(req.params.id, req.body, { new: true })

        const pcToUpdate = {
            name: req.body.name,
            description: req.body.description
        }

        // mise à jour du pc
        Pc.updateOne({ _id: req.params.id }, pcToUpdate)
        .then(pc => {
            res.status(200).json(pc);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
    },

    // deleteOne permet de supprimer un pc par son id
    deletePc: (req, res) => {
        Pc.deleteOne({ _id: req.params.id })
        .then(pc => {
            res.status(200).json(pc);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
    }
}

module.exports = pcController;