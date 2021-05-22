const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true
  },
  reg: {
    type: Number,
    required: true
  },
  session: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);