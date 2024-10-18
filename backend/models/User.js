const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
        required: true,
    },
    commuteFrom: {
        type: String,
        required: true,
    },
    commuteTo: {
        type: String,
        required: true,
    },
    pickupTime: {
        type: String, // You can use Date type if you prefer
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);
