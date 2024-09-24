require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/route');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

//connecting to database
const connectMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
    }
  };
  
  connectMongoDB();
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });