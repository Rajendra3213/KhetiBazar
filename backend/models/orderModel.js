const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema({
  crop: {
    type: ObjectId,
    required: true,
    ref: 'Crop'
  },
  quantity:{
    type: Number,
    required: true,
    default: 0,
    trim: true
  },
  price:{
    type:Number,
    required: true,
    trim: true
  },
  issued_date:{
    type: Date,
    required: true
  },
  deadline_date:{
    type: Date,
    required: true
  },
  terms:{
    type:String,
    required: true,
    trim: true
  },
  isCompleted:{
    type:Boolean,
    required: true,
    default: false
  },
  location:{
    type:String,
    required:true,
    trim:true
  }
},{
  timestamps:true
})

module.exports = mongoose.model('Order', orderSchema)