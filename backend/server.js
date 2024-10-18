const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();




const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes (you will add these later)
app.get('/', (req, res) => res.send('API is running'));

// Listen on PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
