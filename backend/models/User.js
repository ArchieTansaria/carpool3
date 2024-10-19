const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false, // Set to false for registration
    },
    email: {
        type: String,
        required: true, // Required for registration
        unique: true,
    },
    password: {
        type: String,
        required: true, // Required for registration
    },
    designation: {
        type: String,
        required: false, // Set to false for registration
    },
    commuteFrom: {
        type: String,
        required: false, // Set to false for registration
    },
    commuteTo: {
        type: String,
        required: false, // Set to false for registration
    },
    pickupTime: {
        type: Date, // Changed to Date type
        required: false, // Set to false for registration
    },
});

module.exports = mongoose.model('User', userSchema);
