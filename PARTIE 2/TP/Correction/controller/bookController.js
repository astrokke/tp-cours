const { Op, Sequelize } = require('sequelize');
const Book = require('../model/book');
const Stats = require('../model/stats');

// Récupérer tous les livres avec pagination et tri
exports.getAllBooks = async (req, res) => {
    try {
        // Récupération des paramètres de pagination
        const offset = parseInt(req.query.offset) || 0;
        const limit = parseInt(req.query.limit) || 10;

        // Configuration du tri
        let order = [];
        if (req.query.sort === 'title') {
            order.push(['title', 'ASC']);
        } else if (req.query.sort === 'publication_year') {
            order.push(['publication_year', 'ASC']);
        }

        const books = await Book.findAndCountAll({
            offset,
            limit,
            order
        });

        res.json({
            total: books.count,
            books: books.rows
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer un livre par son ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Livre non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Créer un nouveau livre
exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un livre
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.update(req.body);
            res.json(book);
        } else {
            res.status(404).json({ message: 'Livre non trouvé' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un livre
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy();
            res.json({ message: 'Livre supprimé avec succès' });
        } else {
            res.status(404).json({ message: 'Livre non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Rechercher des livres
exports.searchBooks = async (req, res) => {
    try {
        const searchTerm = req.query.q;
        const searchField = req.query.field;

        if (!searchTerm) {
            return res.status(400).json({ message: 'Terme de recherche requis' });
        }

        let whereClause = {};
        
        if (searchField && ['title', 'author', 'isbn'].includes(searchField)) {
            whereClause = {
                [searchField]: { [Op.like]: `%${searchTerm}%` }
            };
        } else {
            whereClause = {
                [Op.or]: [
                    { title: { [Op.like]: `%${searchTerm}%` } },
                    { author: { [Op.like]: `%${searchTerm}%` } },
                    { isbn: { [Op.like]: `%${searchTerm}%` } }
                ]
            };
        }

        const books = await Book.findAll({
            where: whereClause,
            logging: console.log
        });

        res.json({
            total: books.length,
            books: books
        });
    } catch (error) {
        console.error('Erreur de recherche:', error);
        res.status(500).json({ message: error.message });
    }
};

// Obtenir les statistiques
exports.getStats = async (req, res) => {
    try {
        // Calcul du nombre total de livres
        const totalBooks = await Book.count();

        // Calcul des livres par année
        const booksByYear = await Book.findAll({
            attributes: [
                'publication_year',
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']
            ],
            group: ['publication_year']
        });

        // Calcul des livres par auteur
        const booksByAuthor = await Book.findAll({
            attributes: [
                'author',
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']
            ],
            group: ['author']
        });

        // Création de l'objet de statistiques
        const stats = {
            total_books: totalBooks,
            books_by_year: booksByYear.reduce((acc, curr) => {
                acc[curr.publication_year] = curr.get('count');
                return acc;
            }, {}),
            books_by_author: booksByAuthor.reduce((acc, curr) => {
                acc[curr.author] = curr.get('count');
                return acc;
            }, {})
        };

        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 