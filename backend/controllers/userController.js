const User = require("../models/userModel")

// to create User
exports.postUser = async (req, res) => {
  // get data from req body and assign in the object. THis obj is sent to db
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password,
    role: req.body.role,
  })

  // check if email is already registered
  User.findOne({ email: user.email })
    .then(async data => {
      if (data) {
        return res.status(400).json({ error: 'email is already registered' })
      }
      else {
        user = await user.save()
        if (!user) {
          return res.status(401).json({ error: 'something went wrong while creating your account' })
        }
        res.send(user)
      }
    })
    .catch(err => {
      return res.status(400).json({ error: err })
    })
}


// For SignIn
exports.signIn = async (req, res) => {
  // destructuring userSelect: 
  const { email, password } = req.body
  // at first check if email is registered in the database or not
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(403).json({ error: 'Sorry the email you provided has not been registered' })
  }
  else if (user) {
    if (user.password === password) {
      // object destructuring
      const { _id, name, role, number } = user
      return res.status(200).json({ user: { _id, name, email, role, number } })
    }
    else {
      return res.status(401).json({ error: 'Invalid password' })
    }
  }
}

// list all users
exports.userList = async (req, res) => {
  const user = await User.find()
    .select('-password')
    // minus password as we don't want to download password from the bd
  if (!user) {
    return res.status(404).json({ error: 'something went wrong' })
  }
  res.send(user)
}

// user details
exports.userDetail = async (req, res) => {
  const user = await User.findById(req.params.uid)
    .select('-password')
  if (!user) {
    return res.status(404).json({ error: 'something went wrong' })
  }
  res.send(user)
}

// sign out
exports.signOut = (req, res) => {
  res.json({ message: 'signout success' })
}