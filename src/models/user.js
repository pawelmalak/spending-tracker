const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid!')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
  // tokens: [{
  //   token: {

  //   }
  // }]
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User