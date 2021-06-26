const {model} = require('mongoose');

const Student = model('Student',{
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
})

module.exports = Student