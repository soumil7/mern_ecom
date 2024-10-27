import express from 'express';
import UserController from '../Controller/UserController.js';

const router = express.Router();

// Route to create a new user
router.post('/users', UserController.createUser);

// Route to get all users
router.get('/users', UserController.getUsers);

// Route to get a user by ID
router.get('/users/:id', UserController.getUserById);

// Route to update a user by ID
router.put('/users/:id', UserController.updateUser);

// Route to delete a user by ID
router.delete('/users/:id', UserController.deleteUser);

export default router;
