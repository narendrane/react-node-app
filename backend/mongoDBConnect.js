// To connect with your mongoDB database
const mongoose = require('mongoose');
export const connectToMongo = async () => {
    await mongoose.connect('mongodb+srv://',{
        dbName: 'sample_mflix',
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  };
  
