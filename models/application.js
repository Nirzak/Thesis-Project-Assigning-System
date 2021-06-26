const{ Schema, model} = require('mongoose');

const Application = model('Application',{
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
    type: Schema.Types.ObjectId,
    ref: 'Student'
  }
})

module.exports = Application