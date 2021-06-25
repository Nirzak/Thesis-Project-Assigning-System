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
  cgpa: {
    type: number,
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
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  }
});

module.exports = mongoose.model('Application', appSchema);