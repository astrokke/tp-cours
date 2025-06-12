const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

// Routes de l'API
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.patch('/tasks/:id/toggle', taskController.toggleTaskStatus);

module.exports = router; 