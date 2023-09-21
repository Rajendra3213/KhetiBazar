const Contract = require("../models/contractModel");

// to create Order
exports.postContract = async (req, res) => {
  // get data from req body and assign in the object. THis obj is sent to db
  let contract = new Contract({
    name: req.body.name,
    order: req.body.order,
    farmer_id: req.body.farmer_id,
    buyer_id: req.body.buyer_id,
    status: 0,
    isVerified: false
  })
  contract = await contract.save()
  if (!contract) {
    return res.status(400).json({ error: 'something went wrong while creating your contract' })
  }
  res.send(contract)
}

// set order is verified
exports.contractVerified = async (req, res) => {
    let contract = await Contract.findById(req.params.cid)
    contract.isVerified = true
    contract = await contract.save()
    if (!contract) {
        return res.status(500).json({ error: 'failed to update status' })
    }
    return res.status(200).json({ msg: "set contract status: verified" })
}

// set order is not verified
exports.contractNotVerified = async (req, res) => {
    let contract = await Contract.findById(req.params.cid)
    contract.isVerified = false
    contract = await contract.save()
    contract = contract.findById(contract._id)
        .populate('order')
        .populate('user')
    if (!contract) {
        return res.status(500).json({ error: 'failed to update status' })
    }
    return res.status(200).json({ msg: "set contract status: not verified" })
}

exports.contractDetail = async (req, res) => {
    let contract = await Contract.findById(req.params.cid)
        // .populate('order')  
        .populate({
            path: 'order',
            populate: {
                path: 'crop',
                model: 'Crop',
            },
        })
        .populate([
            {
                path: 'farmer_id',
                model: 'User'
            },
            {
                path: 'buyer_id',
                model: 'User'
            }

        ])
    // const orderID = contract.order._id
    // let order = await Contract.findById(orderID)
    // .populate('crops')

    if (!contract) {
        return res.status(404).json({ error: 'something went wrong' })
    }
    res.send(contract)
}

exports.contractStatus = async (req, res) => {
    let contract = await Contract.findById(req.params.cid)
    if (contract.status < 0 || contract.status > 3) {
        return res.status(500).json({ error: 'invalid status' })
    }
    contract.status = req.body.status
    contract = await contract.save()
    if (!contract) {
        return res.status(500).json({ error: 'failed to update status' })
    }
    return res.status(200).json({ msg: `contract status: ${contract.status}` })
}


exports.contractList = async (req, res) => {
    const contract = await Contract.find()
    if (!contract) {
        return res.status(404).json({ error: 'something went wrong' })
    }
    res.send(contract)
}
exports.contractByUser = async (req, res) => {
    const contractArray = await Contract.findById()
    const uid = req.body.params
    let userArray = []
    await contractArray.map(contract => {
        if (uid === contract.farmer_id || uid === contract.buyer_id) {
            userArray.push(contract._id)
        }
    })
    res.send(userArray)
}