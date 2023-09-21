const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Create a new user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Route to check if a user is an admin
router.get('/users/:userId/checkAdmin', userController.checkIfAdmin);

// Get user by ID
router.get('/users/:userId', userController.getUserById);

// Update user by ID
router.put('/users/:userId', userController.updateUserById);

// Delete user by ID
router.delete('/users/:userId', userController.deleteUserById);

module.exports = router;
