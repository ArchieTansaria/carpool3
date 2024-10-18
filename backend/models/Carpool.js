const mongoose = require('mongoose');

const carpoolSchema = new mongoose.Schema({
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    route: { type: String, required: true },
    pickupTime: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'active', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('Carpool', carpoolSchema);
