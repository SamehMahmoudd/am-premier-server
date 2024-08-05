require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const getQuote=require('./Controllers/getQuote')
const getCustomers=require('./Controllers/getCustomers')
const mongoose = require('mongoose');
const allowedOrigins = ['https://am-premier-dashboard.onrender.com', 'https://am-premier.onrender.com'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
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