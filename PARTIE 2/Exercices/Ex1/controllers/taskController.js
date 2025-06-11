// Stockage temporaire des tâches (à remplacer par une base de données dans un vrai projet)
let tasks = [];

// Contrôleurs
const getAll = (req, res) => {
    res.json(tasks);
}

const getTaskById = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id))
    if(!task) return res.status(404).send('Tache innexistante')
    res.json(task)
}

const addTask = (req, res) => {
    const {titre, description, date_debut, date_fin, done} = req.body;
    if(!titre) return res.status(400).send('Titre requis pour ajouter une tache')

    const taskToAdd = {
        id: tasks.length + 1,
        titre,
        description: description || '',
        date_debut: date_debut || null,
        date_fin: date_fin || null,
        done: done || false 
    };

    tasks.push(taskToAdd);
    res.status(201).json(taskToAdd)
}

const updateTask = (req, res) => {
    const taskToUpdate = tasks.find(t => t.id === parseInt(req.params.id))
    if(!taskToUpdate) return res.status(404).send('Tache non trouvee')

    const {titre, description, date_debut, date_fin, done} = req.body;
    if(titre !== undefined) taskToUpdate.titre = titre
    if(description !== undefined) taskToUpdate.description = description
    taskToUpdate.date_debut = date_debut
    taskToUpdate.date_fin = date_fin
    taskToUpdate.done = done

    res.json(taskToUpdate)
}

const deleteTask = (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id))
    if(taskIndex < 0) return res.status(404).send("Tache non trouvee");

    const deletedTask = tasks.splice(taskIndex, 1)
    res.json(deletedTask[0])
}

module.exports = {
    getAll,
    getTaskById,
    addTask,
    updateTask,
    deleteTask
} 