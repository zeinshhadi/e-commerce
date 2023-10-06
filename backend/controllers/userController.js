const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const express = require('express');
const User = require('../models/User'); // Adjust the import path as needed

const registerUser = async (req, res) => {
  console.log("req.body: ",req.body)
  try {
    // Retrieve user input from the request body
    const { username, email, password,role,phoneNumber,location} = req.body;

    // Check if the username or email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', existingUser);
      return res.status(400).json({ message: 'Username or email already exists.' });
    }

    // Hash the user's password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the saltRounds (10) as needed
    console.log('Password hashed successfully');

    // Create a new user object with the hashed password
    const newUser = new User({ username, email, password: hashedPassword,role,phoneNumber,location });
    console.log('New user created:', newUser);

    // Save the user to the database
    await newUser.save();
    console.log('User saved to the database');

    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: newUser._id }, 'your-secret-key'); // Replace 'your-secret-key' with a secret key for JWT
    console.log('JWT token generated:', token);

    // Return the token as well as a success message
    return res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ message: 'Internal server error',error: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    // Retrieve user input from the request body (email and password)
    const { email, password } = req.body;

    // Check if a user with the provided email exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If the email and password are correct, generate a JWT token for authentication
    const token = jwt.sign({ userId: user._id }, 'your-secret-key'); // Replace 'your-secret-key' with your JWT secret

    // Return the token as well as a success message
    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to check if a user is an admin
const checkIfAdmin = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming you pass the user ID as a route parameter

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has the "admin" role (You can customize this role check)
    if (user.role === "admin") {
      res.json({ isAdmin: true });
    } else {
      res.json({ isAdmin: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, getAllUsers, getUserById, updateUserById,loginUser, deleteUserById, checkIfAdmin,registerUser };