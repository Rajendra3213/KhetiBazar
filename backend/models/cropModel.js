const mongoose = require('mongoose')
const cropSchema = new mongoose.Schema({
  crop_name:{
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  crop_description:{
    type: String,
    required: true,
    trim: true
  },
},{
  timestamps:true
})

module.exports = mongoose.model('Crop', cropSchema)
