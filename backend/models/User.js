const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  designation: { type: String, default: '' },  
  carpoolPreference: { type: String, enum: ['driver', 'passenger', 'both'], default: null },  
  commuteFrom: { type: String, default: '' },  
  commuteTo: { type: String, default: '' },    
  pickupTime: { type: String, default: '' },   
});


module.exports = mongoose.model('User' , userSchema)



