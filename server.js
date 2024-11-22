const express = require('express');
const connectDB = require('./config/db'); // Import DB connection function
const bookRoutes = require('./routes/bookRoutes'); // Import book routes

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

// Routes - Use `/api` as the prefix for book routes
app.use('/api/books', bookRoutes);  // Ensure routes are correctly set up

// Root route for testing the server
app.get('/', (req, res) => {
    res.send('Welcome to the Books Collection API!');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
