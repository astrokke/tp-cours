const Pc = require('../model/pc');

const pcController = {

    getPc: (req, res) => {
        Pc.findAll().then(pcs => {
            res.json(pcs);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    },
    getPcById: (req, res) => {
        Pc.findByPk(req.params.id).then(pc => {
            res.json(pc);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    },
    createPc: (req, res) => {
        Pc.create(req.body).then(pc => {
            res.status(201).json(pc);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    },
    updatePc: (req, res) => {
        Pc.update(req.body, {
            where: { id: req.params.id }
        }).then(pc => {
            res.json(pc);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    },
    deletePc: (req, res) => {
        Pc.destroy({
            where: { id: req.params.id }
        }).then(pc => {
            res.status(204).send();
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    }
}

module.exports = pcController;