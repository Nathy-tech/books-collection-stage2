const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded to use environment variables

const connectDB = async () => {
    try {
        // Use MongoDB URI from environment variable (MONGODB_URI) or fall back to local MongoDB
        const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/booksCollection';

        await mongoose.connect(dbURI, {
            useNewUrlParser: true,       // Use the new URL parser (avoid deprecation warnings)
            useUnifiedTopology: true,   // Ensure that the topology engine is using the latest methods
        });

        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure if connection fails
    }
};

module.exports = connectDB;
