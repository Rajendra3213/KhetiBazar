const Order = require("../models/orderModel");

// to create Order
exports.postOrder = async (req, res) => {
  // get data from req body and assign in the object. THis obj is sent to db
  let currentDate = new Date()
  const specificDate = new Date('2023-09-16');
  let order = new Order({
    crop: req.body.crop,
    quantity: req.body.quantity,
    price: req.body.price,
    issued_date: currentDate,
    deadline_date: specificDate,
    terms: req.body.terms,
    location: req.body.location
  })
  order = await order.save()
  if (!order) {
    return res.status(400).json({ error: 'something went wrong while creating your order' })
  }
  res.send(order)
}

// set order is complete
exports.orderComplete = async (req, res) => {
  let order = await Order.findById(req.params.oid)
  order.isCompleted = true
  order = await order.save()
  if (!order) {
    return res.status(500).json({ error: 'failed to update status' })
  }
  return res.status(200).json({ msg: "set order status: completed" })
}

// set order is not complete
exports.orderNotComplete = async (req, res) => {
  let order = await Order.findById(req.params.oid)
  order.isCompleted = false
  order = await order.save()
  if (!order) {
    return res.status(500).json({ error: 'failed to update status' })
  }
  return res.status(200).json({ msg: "set order status: not-completed" })
}

exports.orderList = async (req, res) => {
  const order = await Order.find()
  if (!order) {
    return res.status(404).json({ error: 'something went wrong' })
  }
  res.send(order)
}

exports.orderDetail = async (req, res) => {
  let order = await Order.findById(req.params.oid)
    .populate('crop')
  if (!order) {
    return res.status(404).json({ error: 'something went wrong' })
  }
  res.send(order)
}