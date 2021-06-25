const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  phone: {
    type: number,
    required: true
  },
  researchInterest: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Teacher', teacherSchema);