const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const contractSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    trim: true
  },
  order:{
    type: ObjectId,
    required: true,
    ref: 'Order'
  },
  farmer_id:{
    type:ObjectId,
    required: true,
    ref: 'User'
  },
  buyer_id:{
    type:ObjectId,
    required: true,
    ref: 'User'
  },
  status:{
    // 0 - Review/Pending/Requested
    // 1 - Reject
    // 2 - Active/Accept
    // 3 - Complete
    type: Number,
    required: true,
    default: 0
  },
  isVerified:{
    type: Boolean,
    required:true,
    default:false
  }
},{
  timestamps:true
})

module.exports = mongoose.model('Contract', contractSchema)
