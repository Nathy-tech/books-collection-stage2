const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController'); // Import bookController
const { authenticate, authorize } = require('../middleware/authMiddleware'); // Import auth middleware

// Get all books (Admin only)
router.get('/', authenticate, authorize(['admin']), bookController.getAllBooks);  // GET /api/books

// Add a new book (User can add)
router.post('/', authenticate, bookController.addBook);     // POST /api/books

// Update a book by ID (Authenticated users)
router.put('/:id', authenticate, bookController.updateBook);  // PUT /api/books/:id

// Delete a book by ID (Admin only)
router.delete('/:id', authenticate, authorize(['admin']), bookController.deleteBook);  // DELETE /api/books/:id

module.exports = router;  // Export the router
