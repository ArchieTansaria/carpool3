const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
	driver: { type: String, required: true }, // Change to String
	commuteFrom: { type: String, required: true },
	commuteTo: { type: String, required: true },
	pickupTime: { type: Date, required: true },
	passengers: [{ type: String }], // If you want to store passengers as an array of strings (emails or IDs)
});

const Ride = mongoose.model("Ride", rideSchema);
module.exports = Ride;
