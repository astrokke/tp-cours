const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

// Routes spéciales
router.get('/feat/search', bookController.searchBooks);
router.get('/feat/stats', bookController.getStats);

// Routes CRUD
router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router; 