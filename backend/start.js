const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const checkMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/panel-paradise');
    console.log('MongoDB connection successful');
    process.exit(0);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

checkMongoDB(); 