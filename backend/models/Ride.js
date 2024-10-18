const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    commuteFrom: { type: String, required: true },
    commuteTo: { type: String, required: true },
    pickupTime: { type: Date, required: true },
    status: { type: String, default: 'open' }, // can be 'open', 'closed', 'in-progress'
}, { timestamps: true });

const Ride = mongoose.model('Ride', rideSchema);
module.exports = Ride;

