const {model} = require('mongoose');

const Supervisor = model('Supervisor',{
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
    type: Number,
    required: true
  },
  researchInterest: {
    type: String,
    required: true
  }
})

module.exports = Supervisor