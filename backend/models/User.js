// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name : {
    type : String,
    required: true
   },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
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
        type: String,
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true,
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true,
        },
    },
});

// Create a 2dsphere index for geolocation queries
userSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', userSchema);

module.exports = User;
