const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User'); // Update the path as needed
const Carpool = require('./models/Carpool'); // Update the path as needed
const Ride = require('./models/Ride'); // Update the path as needed

dotenv.config(); // Load environment variables

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    seedData();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const seedData = async () => {
  // Clear existing data
  await User.deleteMany({});
  await Carpool.deleteMany({});
  await Ride.deleteMany({});

  // Create mock users
  const users = await User.create([
    { name: 'User 1', email: 'user1@example.com', password: 'password123', designation: 'Developer', carpoolPreference: 'driver', commuteFrom: 'Location A', commuteTo: 'Location B', pickupTime: '09:00 AM' },
    { name: 'User 2', email: 'user2@example.com', password: 'password123', designation: 'Manager', carpoolPreference: 'passenger', commuteFrom: 'Location C', commuteTo: 'Location D', pickupTime: '09:15 AM' },
    { name: 'User 3', email: 'user3@example.com', password: 'password123', designation: 'Designer', carpoolPreference: 'both', commuteFrom: 'Location E', commuteTo: 'Location F', pickupTime: '09:30 AM' },
    { name: 'User 4', email: 'user4@example.com', password: 'password123', designation: 'Analyst', carpoolPreference: 'driver', commuteFrom: 'Location G', commuteTo: 'Location H', pickupTime: '09:45 AM' },
    { name: 'User 5', email: 'user5@example.com', password: 'password123', designation: 'QA', carpoolPreference: 'passenger', commuteFrom: 'Location I', commuteTo: 'Location J', pickupTime: '10:00 AM' },
    { name: 'User 6', email: 'user6@example.com', password: 'password123', designation: 'Support', carpoolPreference: 'both', commuteFrom: 'Location K', commuteTo: 'Location L', pickupTime: '10:15 AM' },
    { name: 'User 7', email: 'user7@example.com', password: 'password123', designation: 'Intern', carpoolPreference: 'driver', commuteFrom: 'Location M', commuteTo: 'Location N', pickupTime: '10:30 AM' },
    { name: 'User 8', email: 'user8@example.com', password: 'password123', designation: 'Admin', carpoolPreference: 'passenger', commuteFrom: 'Location O', commuteTo: 'Location P', pickupTime: '10:45 AM' },
    { name: 'User 9', email: 'user9@example.com', password: 'password123', designation: 'HR', carpoolPreference: 'both', commuteFrom: 'Location Q', commuteTo: 'Location R', pickupTime: '11:00 AM' },
    { name: 'User 10', email: 'user10@example.com', password: 'password123', designation: 'Product Owner', carpoolPreference: 'driver', commuteFrom: 'Location S', commuteTo: 'Location T', pickupTime: '11:15 AM' },
    { name: 'User 11', email: 'user11@example.com', password: 'password123', designation: 'Data Scientist', carpoolPreference: 'passenger', commuteFrom: 'Location U', commuteTo: 'Location V', pickupTime: '11:30 AM' },
    { name: 'User 12', email: 'user12@example.com', password: 'password123', designation: 'DevOps', carpoolPreference: 'both', commuteFrom: 'Location W', commuteTo: 'Location X', pickupTime: '11:45 AM' },
    { name: 'User 13', email: 'user13@example.com', password: 'password123', designation: 'Marketing', carpoolPreference: 'driver', commuteFrom: 'Location Y', commuteTo: 'Location Z', pickupTime: '12:00 PM' },
    { name: 'User 14', email: 'user14@example.com', password: 'password123', designation: 'Sales', carpoolPreference: 'passenger', commuteFrom: 'Location AA', commuteTo: 'Location AB', pickupTime: '12:15 PM' },
    { name: 'User 15', email: 'user15@example.com', password: 'password123', designation: 'Finance', carpoolPreference: 'both', commuteFrom: 'Location AC', commuteTo: 'Location AD', pickupTime: '12:30 PM' },
    { name: 'User 16', email: 'user16@example.com', password: 'password123', designation: 'Executive', carpoolPreference: 'driver', commuteFrom: 'Location AE', commuteTo: 'Location AF', pickupTime: '12:45 PM' },
    { name: 'User 17', email: 'user17@example.com', password: 'password123', designation: 'Director', carpoolPreference: 'passenger', commuteFrom: 'Location AG', commuteTo: 'Location AH', pickupTime: '01:00 PM' },
    { name: 'User 18', email: 'user18@example.com', password: 'password123', designation: 'CTO', carpoolPreference: 'both', commuteFrom: 'Location AI', commuteTo: 'Location AJ', pickupTime: '01:15 PM' },
    { name: 'User 19', email: 'user19@example.com', password: 'password123', designation: 'CFO', carpoolPreference: 'driver', commuteFrom: 'Location AK', commuteTo: 'Location AL', pickupTime: '01:30 PM' },
    { name: 'User 20', email: 'user20@example.com', password: 'password123', designation: 'COO', carpoolPreference: 'passenger', commuteFrom: 'Location AM', commuteTo: 'Location AN', pickupTime: '01:45 PM' },
  ]);

  // Create mock carpools
  const carpools = await Carpool.create([
    { driverId: users[0]._id, route: 'Route A', pickupTime: new Date(), passengers: [users[1]._id, users[2]._id] },
    { driverId: users[3]._id, route: 'Route B', pickupTime: new Date(), passengers: [users[4]._id, users[5]._id] },
    { driverId: users[6]._id, route: 'Route C', pickupTime: new Date(), passengers: [users[7]._id, users[8]._id] },
    { driverId: users[9]._id, route: 'Route D', pickupTime: new Date(), passengers: [users[10]._id, users[11]._id] },
    { driverId: users[12]._id, route: 'Route E', pickupTime: new Date(), passengers: [users[13]._id, users[14]._id] },
    { driverId: users[15]._id, route: 'Route F', pickupTime: new Date(), passengers: [users[16]._id, users[17]._id] },
    { driverId: users[18]._id, route: 'Route G', pickupTime: new Date(), passengers: [users[19]._id] },
  ]);

  // Create mock rides
  const rides = await Ride.create([
    { carpoolId: carpools[0]._id, rideStatus: 'pending', driverId: carpools[0].driverId },
    { carpoolId: carpools[1]._id, rideStatus: 'active', driverId: carpools[1].driverId },
    { carpoolId: carpools[2]._id, rideStatus: 'completed', driverId: carpools[2].driverId },
    { carpoolId: carpools[3]._id, rideStatus: 'pending', driverId: carpools[3].driverId },
    { carpoolId: carpools[4]._id, rideStatus: 'active', driverId: carpools[4].driverId },
    { carpoolId: carpools[5]._id, rideStatus: 'completed', driverId: carpools[5].driverId },
    { carpoolId: carpools[6]._id, rideStatus: 'pending', driverId: carpools[6].driverId },
  ]);

  console.log('Mock data seeded successfully');

  // Close the connection
  mongoose.connection.close();
};


