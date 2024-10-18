const mongoose = require("mongoose")
const dotenv = require('dotenv')
const User = require("./models/User");
const Carpool = require("./models/Carpool");
const Ride = require("./models/Ride")

dotenv.config()



mongoose.connect(process.env.MONGO_URI)
.then( () => {
  console.log (" connected to MongoDB Atlas")
  seedData()
})
.catch( (error ) => {
  console.log(" mongo connection error : "  , error)
})