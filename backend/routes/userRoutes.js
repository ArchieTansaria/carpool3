const express = require("express");
const User = require("../models/User"); // Adjust the path as needed
const router = express.Router();

// Registration Route
router.post("/register", async (req, res) => {
	const { email, password } = req.body;

	try {
		// Check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ error: "User already exists!" });
		}

		// Create a new user
		const newUser = new User({
			email,
			password, // Store password as plain text (not recommended for production)
		});

		await newUser.save();
		res.status(201).json({ message: "User registered successfully!" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

// Login Route
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(404).json({ error: "User not found!" });

		// Simple password match (no hashing)
		if (user.password !== password) {
			return res.status(401).json({ error: "Invalid credentials!" });
		}

		res.status(200).json({
			message: "Login successful!",
			userId: user._id,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Profile Setup Route
router.put("/profile", async (req, res) => {
	const { email, name, designation, commuteFrom, commuteTo, pickupTime } =
		req.body;

	try {
		// Find the user by email (or another unique identifier)
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ error: "User not found!" });
		}

		// Update user details
		user.name = name;
		user.designation = designation;
		user.commuteFrom = commuteFrom;
		user.commuteTo = commuteTo;
		user.pickupTime = pickupTime;

		await user.save(); // Save the updated user

		res.status(200).json({
			message: "Profile updated successfully!",
			user,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = router;
