const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber:Number,
    address: String,
    personalQuote: String,
    commercialQuote: String,
  }, { timestamps: true });

  module.exports = mongoose.model('Customer',customerSchema)