const express = require('express');
const router = express.Router();

const controller = require('../controller/pcController');

// Get pc va récupérer la liste de tous les pc
router.get('/', controller.getPc);
// Get pc va récupérer un pc par son id
router.get('/:id', controller.getPcById);
// Post pc va créer un nouveau pc
router.post('/', controller.createPc);
// Put pc va mettre à jour un pc par son id
router.put('/:id', controller.updatePc);
// Delete pc va supprimer un pc par son id
router.delete('/:id', controller.deletePc);

module.exports = router;