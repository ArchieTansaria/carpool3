const express = require('express');
const Ride = require('../models/Ride');
const User = require('../models/User'); // Import User model
const router = express.Router();

// Create a Ride
router.post('/create', async (req, res) => {
    const { driver, commuteFrom, commuteTo, pickupTime } = req.body;

    try {
        const newRide = new Ride({
            driver,
            commuteFrom,
            commuteTo,
            pickupTime,
        });

        await newRide.save();
        res.status(201).json({ message: 'Ride created successfully!', ride: newRide });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Fetch Available Rides
// In your rideRoutes.js

router.get('/available', async (req, res) => {
  try {
      const { userId } = req.body; // Assume you get the logged-in user's ID
      const user = await User.findById(userId);

      if (!user) return res.status(404).send('User not found');

      // Find rides that are open and within the user's commute parameters
      const rides = await Ride.find({
          status: 'open',
          commuteFrom: user.commuteFrom,
          commuteTo: user.commuteTo,
          pickupTime: {
              $gte: new Date(new Date(user.pickupTime).getTime() - 30 * 60 * 1000), // 30 minutes earlier
              $lte: new Date(new Date(user.pickupTime).getTime() + 30 * 60 * 1000)  // 30 minutes later
          }
      }).populate('driver', 'name email'); // Populate driver details if needed

      res.status(200).json(rides);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

// Join a Ride
// In your rideRoutes.js

router.post('/join', async (req, res) => {
  const { passengerId, rideId } = req.body;

  try {
      const ride = await Ride.findById(rideId);
      if (!ride) return res.status(404).json({ error: 'Ride not found!' });

      // Check if the ride can accept more passengers
      if (ride.passengers.length >= 4) {
          return res.status(400).json({ error: 'This ride is full!' });
      }

      // Add passenger to the ride
      ride.passengers.push(passengerId);
      await ride.save();

      // Notify driver (placeholder for actual notification logic)
      console.log(`Driver notified: Passenger ${passengerId} has joined ride ${rideId}`);

      res.status(200).json({ message: 'Joined ride successfully!', ride });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

// Manage Ride Status (Accept or Reject)
router.put('/ride/status', async (req, res) => {
  const { rideId, status } = req.body;

  try {
      const ride = await Ride.findByIdAndUpdate(rideId, { status }, { new: true });
      if (!ride) return res.status(404).json({ error: 'Ride not found!' });

      res.status(200).json({ message: 'Ride status updated successfully!', ride });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});


module.exports = router;


