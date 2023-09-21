const express = require('express')
const router = express.Router()
const Contract = require('../models/contractModel')
const { postContract, contractVerified, contractNotVerified, contractDetail, contractStatus, contractList, contractByUser } = require('../controllers/contractController')

router.post('/postcontract',postContract)
router.put('/contractverified/:cid',contractVerified)
router.put('/contractnotberified/:cid',contractNotVerified)
router.get('/contractdetail/:cid',contractDetail)
router.put('/contractstatus/:cid',contractStatus)
router.get('/contractlist',contractList)
router.get('/contractbyuser/:uid',contractByUser)


module.exports = router
