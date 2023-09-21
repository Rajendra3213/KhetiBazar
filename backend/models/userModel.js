const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  number:{
    type:Number,
    required: false,
    unique: true,
    trim:true
  },
  password:{
    type: String,
    required: true,
  },
  role:{
    type: Number,
    required: true,
    default: 0
    // 0 = farmer
    // 1 = buyer
  }
}, { timeStamps: true })

module.exports = mongoose.model('User', userSchema)
