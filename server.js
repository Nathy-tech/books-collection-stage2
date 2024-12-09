require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Import DB connection function
const bookRoutes = require('./routes/bookRoutes'); // Import book routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB database
connectDB();

// Debugging: Log every request
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method} | Request URL: ${req.originalUrl}`);
    next();
});

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes (signup, login)
app.use('/api/books', bookRoutes);  // Books routes (CRUD operations)

// Root route for testing the server
app.get('/', (req, res) => {
    res.send('Welcome to the Books Collection API!');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
