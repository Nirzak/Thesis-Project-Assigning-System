const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true
  },
  field: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  choice: {
    type: String,
    required: true
  },
  cgpa: {
    type: Number,
    required: true
  },
  status:{
    type: String,
    required: false
  },
  userid: {
    type: mongoose.Types.ObjectId,
    ref: 'Student'
  }
});

module.exports = mongoose.model('Application', appSchema);