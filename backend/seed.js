const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path if needed
const Ride = require('./models/Ride'); // Adjust path if needed

const connectDB = require('./db'); // Adjust path if needed

const seedData = async () => {
    await connectDB();

    try {
        // Clear existing data
        await User.deleteMany({});
        await Ride.deleteMany({});

        // Create mock users
        const users = [
          {
              name: "David Smith",
              email: "david.smith@example.com",
              password: "password123",
              designation: "Software Engineer",
              commuteFrom: "345 Bagalur Cross, Yelahanka",
              commuteTo: "456 Manipal, Yelahanka",
              pickupTime: new Date("2024-10-19T08:00:00Z"),
          },
          {
              name: "Alice Johnson",
              email: "alice.johnson@example.com",
              password: "password123",
              designation: "Project Manager",
              commuteFrom: "123 Main Street, Yelahanka",
              commuteTo: "789 Park Avenue, Yelahanka",
              pickupTime: new Date("2024-10-19T08:15:00Z"),
          },
          {
              name: "Michael Brown",
              email: "michael.brown@example.com",
              password: "password123",
              designation: "Data Analyst",
              commuteFrom: "234 Elm Street, Yelahanka",
              commuteTo: "890 Maple Drive, Yelahanka",
              pickupTime: new Date("2024-10-19T08:30:00Z"),
          },
          {
              name: "Jessica Taylor",
              email: "jessica.taylor@example.com",
              password: "password123",
              designation: "UX Designer",
              commuteFrom: "567 Oak Avenue, Yelahanka",
              commuteTo: "123 Willow Lane, Yelahanka",
              pickupTime: new Date("2024-10-19T08:45:00Z"),
          },
          {
              name: "Daniel Wilson",
              email: "daniel.wilson@example.com",
              password: "password123",
              designation: "System Administrator",
              commuteFrom: "678 Pine Road, Yelahanka",
              commuteTo: "456 Cedar Street, Yelahanka",
              pickupTime: new Date("2024-10-19T09:00:00Z"),
          },
          {
              name: "Sophia Davis",
              email: "sophia.davis@example.com",
              password: "password123",
              designation: "Business Analyst",
              commuteFrom: "890 Birch Court, Yelahanka",
              commuteTo: "123 Spruce Avenue, Yelahanka",
              pickupTime: new Date("2024-10-19T09:15:00Z"),
          },
          {
              name: "James Martinez",
              email: "james.martinez@example.com",
              password: "password123",
              designation: "Web Developer",
              commuteFrom: "234 Palm Street, Yelahanka",
              commuteTo: "456 Cherry Lane, Yelahanka",
              pickupTime: new Date("2024-10-19T09:30:00Z"),
          },
          {
              name: "Emma Garcia",
              email: "emma.garcia@example.com",
              password: "password123",
              designation: "Product Owner",
              commuteFrom: "345 Maple Avenue, Yelahanka",
              commuteTo: "789 Birch Street, Yelahanka",
              pickupTime: new Date("2024-10-19T09:45:00Z"),
          },
          {
              name: "Liam Martinez",
              email: "liam.martinez@example.com",
              password: "password123",
              designation: "Software Tester",
              commuteFrom: "456 Cedar Road, Yelahanka",
              commuteTo: "678 Spruce Avenue, Yelahanka",
              pickupTime: new Date("2024-10-19T10:00:00Z"),
          },
          {
              name: "Olivia Hernandez",
              email: "olivia.hernandez@example.com",
              password: "password123",
              designation: "Graphic Designer",
              commuteFrom: "789 Willow Street, Yelahanka",
              commuteTo: "234 Oak Court, Yelahanka",
              pickupTime: new Date("2024-10-19T10:15:00Z"),
          },
      ];
      
      

        // Create mock rides
        const rides = [
          {
              driver: 'alice@example.com',
              commuteFrom: '123 Main St',
              commuteTo: '456 Elm St',
              pickupTime: new Date('2024-10-20T08:00:00Z'),
          },
          {
              driver: 'bob@example.com',
              commuteFrom: '789 Oak St',
              commuteTo: '101 Pine St',
              pickupTime: new Date('2024-10-20T08:30:00Z'),
          },
          {
              driver: 'carol@example.com',
              commuteFrom: '111 Maple St',
              commuteTo: '222 Cedar St',
              pickupTime: new Date('2024-10-20T09:00:00Z'),
          },
          {
              driver: 'dave@example.com',
              commuteFrom: '333 Birch St',
              commuteTo: '444 Spruce St',
              pickupTime: new Date('2024-10-20T09:30:00Z'),
          },
          {
              driver: 'eve@example.com',
              commuteFrom: '555 Cherry St',
              commuteTo: '666 Walnut St',
              pickupTime: new Date('2024-10-20T10:00:00Z'),
          },
          {
              driver: 'frank@example.com',
              commuteFrom: '777 Ash St',
              commuteTo: '888 Chestnut St',
              pickupTime: new Date('2024-10-20T10:30:00Z'),
          },
          {
              driver: 'grace@example.com',
              commuteFrom: '999 Maple St',
              commuteTo: '1010 Olive St',
              pickupTime: new Date('2024-10-20T11:00:00Z'),
          },
          {
              driver: 'henry@example.com',
              commuteFrom: '121 Pine St',
              commuteTo: '131 Spruce St',
              pickupTime: new Date('2024-10-20T11:30:00Z'),
          },
          {
              driver: 'isabel@example.com',
              commuteFrom: '141 Elm St',
              commuteTo: '151 Oak St',
              pickupTime: new Date('2024-10-20T12:00:00Z'),
          },
          {
              driver: 'jack@example.com',
              commuteFrom: '161 Birch St',
              commuteTo: '171 Cherry St',
              pickupTime: new Date('2024-10-20T12:30:00Z'),
          },
      ];
        // Insert mock data into the database
        await User.insertMany(users);
        await Ride.insertMany(rides);

        console.log('Mock data seeded successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        mongoose.connection.close(); // Ensure connection is closed after operation
    }
};

seedData();
