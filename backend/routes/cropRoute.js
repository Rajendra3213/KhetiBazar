const express = require('express')
const { cropList, cropDetail } = require('../controllers/cropController')
const router = express.Router()

const Crop = require('../models/cropModel')
router.get('/croplist',cropList)
router.get('/cropdetail/:cid',cropDetail)
// router.post('/postcrop',(req,res)=>{
//     // get data from req body and assign in the object. THis obj is sent to db
//     let crop = new Crop({
//       crop_name: "Wheat",
//       crop_description: "Wheat is one of the most important staple crops globally. It is a cereal grain widely cultivated for its nutritious seeds. Wheat is primarily used for making flour, which is used in bread, pasta, pastries, and various other food products."
//     })
//     res.send(crop)
// })

module.exports = router