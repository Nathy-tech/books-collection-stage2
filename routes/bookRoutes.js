const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController'); // Import bookController

// Get all books
router.get('/', bookController.getAllBooks);  // GET /api/books

// Add a new book
router.post('/', bookController.addBook);     // POST /api/books

// Update a book by ID
router.put('/:id', bookController.updateBook);  // PUT /api/books/:id

// Delete a book by ID
router.delete('/:id', bookController.deleteBook);  // DELETE /api/books/:id

module.exports = router;  // Export the router
