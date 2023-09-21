const Crop = require('../models/cropModel')

// list all crops
exports.cropList = async (req, res) => {
  const crop = await Crop.find()
  if (!crop) {
    return res.status(404).json({ error: 'something went wrong' })
  }
  res.send(crop)
}

// crop details
exports.cropDetail = async (req, res) => {
  const crop = await Crop.findById(req.params.cid)
  if (!crop) {
    return res.status(404).json({ error: 'something went wrong' })
  }
  res.send(crop)
}