const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Routes pour les tâches
router.get('/', taskController.getAll);
router.get('/:id', taskController.getTaskById);
router.post('/', taskController.addTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router; 