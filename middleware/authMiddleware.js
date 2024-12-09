const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import User model

// Authentication Middleware
exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Bearer token format
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

// Authorization Middleware
exports.authorize = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden. You do not have the required role.' });
        }
        next();
    };
};
