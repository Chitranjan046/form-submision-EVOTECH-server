const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  name: String,
  gender: String,
  nationality: String,
  email: String,
  phoneNumber: String,
  address: String,
  message: String,
}, { timestamps: true });

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
