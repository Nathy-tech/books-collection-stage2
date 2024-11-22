const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Make sure the environment variable is being used
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            console.error('MONGODB_URI environment variable is not set.');
            process.exit(1); // Exit if MongoDB URI is not available
        }
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
