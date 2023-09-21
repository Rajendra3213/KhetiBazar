const express = require('express')
const {postUser, signIn, userList, userDetail, signOut} = require('../controllers/userController')
const router = express.Router()

const userTest = (req,res)=>{
  res.json({msg:"hello user"})
}
router.get('/testuser',userTest)
router.post('/signup',postUser)
router.post('/signin',signIn)
router.get('/userlist',userList)
router.get('/userdetail/:uid',userDetail)
router.post('/signout',signOut)

module.exports = router

