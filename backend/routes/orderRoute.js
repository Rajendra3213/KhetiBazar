const express = require('express')
const router = express.Router()
const Order = require('../models/orderModel')
const { postOrder, orderComplete, orderNotComplete, orderDetail, orderList } = require('../controllers/orderController')

router.post('/postorder',postOrder)
router.put('/ordercomplete/:oid',orderComplete)
router.put('/ordernotcomplete/:oid',orderNotComplete)
router.get('/orderlist',orderList)
router.get('/orderdetail/:oid',orderDetail)

module.exports = router
