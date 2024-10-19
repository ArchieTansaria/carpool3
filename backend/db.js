require('dotenv').config();
console.log('Environment Variables Loaded:', process.env); 
console.log('MongoDB URI:', process.env.MONGODB_URI); // Log to check if it's being loaded

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
