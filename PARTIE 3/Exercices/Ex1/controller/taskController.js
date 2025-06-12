const Task = require('../model/task');

// Récupérer toutes les tâches
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer une tâche par son ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Tâche non trouvée' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Créer une nouvelle tâche
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour une tâche
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (!task) {
            return res.status(404).json({ message: 'Tâche non trouvée' });
        }
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer une tâche
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Tâche non trouvée' });
        }
        res.json({ message: 'Tâche supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Marquer une tâche comme accomplie/non accomplie
exports.toggleTaskStatus = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Tâche non trouvée' });
        }
        task.done = !task.done;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 