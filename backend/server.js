require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Assuming this is where your user routes are

const app = express();
const PORT = process.env.PORT || 5001;


app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.use('/api/users', userRoutes); 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
