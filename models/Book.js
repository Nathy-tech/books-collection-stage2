const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    isbn: {
        type: String,
        required: [true, 'ISBN is required'],
        unique: true
    },
    publishedYear: {
        type: Number,
        required: [true, 'Published year is required']
    },
    isFavorite: {
        type: Boolean,
        default: false
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

