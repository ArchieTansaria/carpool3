const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: false, // Changed to optional
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	designation: {
		type: String,
		required: false, // Changed to optional
	},
	commuteFrom: {
		type: String,
		required: false, // Changed to optional
	},
	commuteTo: {
		type: String,
		required: false, // Changed to optional
	},
	pickupTime: {
		type: Date, // You can use Date type if you prefer
		required: false, // Changed to optional
	},
});

module.exports = mongoose.model("User", userSchema);
