const express = require('express');
const { signup, login } = require('../controllers/authController');
const { body } = require('express-validator');
const router = express.Router();

// Signup route
router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  signup
);

// Login route
router.post('/login', login);

module.exports = router;
