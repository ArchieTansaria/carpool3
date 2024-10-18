const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    carpoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'Carpool', required: true },
    rideStatus: { type: String, enum: ['pending', 'active', 'completed'], default: 'pending' },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Ride', rideSchema);
