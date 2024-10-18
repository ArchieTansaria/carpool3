// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const NodeGeocoder = require('node-geocoder');

const geocoder = NodeGeocoder({
  provider: 'openstreetmap', // You can choose another provider if needed
  httpAdapter: 'https',
  apiKey: '', // Set if your provider requires an API key
  formatter: null, // 'gpx', 'string', etc.
});

// Route for basic registration (email and password)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route for updating user details
router.post('/register/details', async (req, res) => {
  const { name , email, designation, commuteFrom, commuteTo, pickupTime } = req.body; // Include email from the request body

  try {
    // Find the user using the email passed in the request
    const user = await User.findOne({ email }); // Using findOne to get the user by email
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Use geocoder to get latitude and longitude for commuteFrom and commuteTo
    const fromLocation = await geocoder.geocode(commuteFrom);
    const toLocation = await geocoder.geocode(commuteTo);

    // Check if geocoding was successful
    if (!fromLocation.length || !toLocation.length) {
      return res.status(400).json({ message: 'Invalid commute locations' });
    }

    // Update user with additional details
    user.designation = designation;
    user.commuteFrom = commuteFrom; 
    user.commuteTo = commuteTo;
    user.pickupTime = pickupTime;

    // Store geolocation data in user model if necessary
    user.location = {
      type: 'Point',
      coordinates: [fromLocation[0].longitude, fromLocation[0].latitude],
    };

    await user.save();
    res.status(200).json({ message: 'User details updated successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
