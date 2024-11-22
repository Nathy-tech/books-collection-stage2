const Book = require('/models/book.js');  // Import the Book model

// Get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();  // Fetch all books
        res.status(200).json(books);  // Return books as JSON response
    } catch (error) {
        res.status(500).json({ message: 'Server error, unable to fetch books', error: error.message });
    }
};

// Add a new book
const addBook = async (req, res) => {
    const { title, author, isbn, publishedYear } = req.body;

    // Data validation
    if (!title || !author || !isbn || !publishedYear) {
        return res.status(400).json({ message: 'All fields (title, author, isbn, publishedYear) are required' });
    }

    const currentYear = new Date().getFullYear();
    if (publishedYear < 1900 || publishedYear > currentYear) {
        return res.status(400).json({ message: 'Published year must be between 1900 and the current year' });
    }

    // Check if the book with the same ISBN already exists
    const existingBook = await Book.findOne({ isbn });
    if (existingBook) {
        return res.status(400).json({ message: 'Book with this ISBN already exists' });
    }

    // Create and save the new book
    try {
        const newBook = new Book({ title, author, isbn, publishedYear });
        await newBook.save();
        res.status(201).json(newBook);  // Return the newly added book
    } catch (error) {
        res.status(500).json({ message: 'Error creating book', error: error.message });
    }
};

// Update a book by ID
const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, isbn, publishedYear } = req.body;

    // Data validation
    if (!title || !author || !isbn || !publishedYear) {
        return res.status(400).json({ message: 'All fields (title, author, isbn, publishedYear) are required' });
    }

    const currentYear = new Date().getFullYear();
    if (publishedYear < 1900 || publishedYear > currentYear) {
        return res.status(400).json({ message: 'Published year must be between 1900 and the current year' });
    }

    try {
        // Find and update the book by its ID
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, isbn, publishedYear }, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(updatedBook);  // Return the updated book
    } catch (error) {
        res.status(500).json({ message: 'Error updating book', error: error.message });
    }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });  // Confirm the deletion
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error: error.message });
    }
};

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
};
