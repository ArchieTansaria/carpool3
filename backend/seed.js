const seedUsers = async () => {
  const users = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123', // Ideally, hash the password in production
      designation: 'Software Engineer',
      commuteFrom: 'New York, NY',
      commuteTo: 'San Francisco, CA',
      pickupTime: '08:30 AM',
      location: {
        type: 'Point',
        coordinates: [-73.935242, 40.730610] // Example coordinates (longitude, latitude)
      }
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: 'password456',
      designation: 'Product Manager',
      commuteFrom: 'Los Angeles, CA',
      commuteTo: 'Seattle, WA',
      pickupTime: '09:00 AM',
      location: {
        type: 'Point',
        coordinates: [-118.243683, 34.052235] // Example coordinates (longitude, latitude)
      }
    }
  ];

  try {
    await User.deleteMany(); // Clear existing users
    await User.insertMany(users);
    console.log('Mock data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};
