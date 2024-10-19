require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const rideRoutes = require('./routes/rideRoutes');  

const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes); 
app.use('/api/rides', rideRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
