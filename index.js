require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const getQuote=require('./Controllers/getQuote')
const getCustomers=require('./Controllers/getCustomers')
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());

app.post('/submit-form',getQuote)
app.get("/customers",getCustomers)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on ${process.env.SERVER_URL}`);
});

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.CONNECTION_STRING, {
        
      });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Failed to connect to MongoDB', err);
     
    }
  };

  connectDB();