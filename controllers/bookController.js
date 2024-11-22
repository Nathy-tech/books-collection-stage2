const Book = require('../models/Book');
const validateBook = require('../middleware/validation');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const addBook = async (req, res) => {
    const { error } = validateBook(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { title, author, isbn, publishedYear } = req.body;
    try {
        let book = new Book({ title, author, isbn, publishedYear });
        book = await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const updateBook = async (req, res) => {
    const { error } = validateBook(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).send('Book not found');
        res.json(book);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).send('Book not found');
        res.status(200).send('Book deleted');
    } catch (err) {
        res.status(500).send('Server error');
    }
};

module.exports = { getBooks, addBook, updateBook, deleteBook };

