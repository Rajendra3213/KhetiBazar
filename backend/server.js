const express = require('express')
const app = express()
require('dotenv').config()
require('./db/connection')
const cors = require('cors')
const morgan = require('morgan')




const userRoute = require('./routes/userRoute')
const cropRoute = require('./routes/cropRoute')
const orderRoute = require('./routes/orderRoute')
const contractRoute = require('./routes/contractRoute')

// middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

// routes middleware - check if we can let the req proceed forward or not
app.get('/', (req, res) => {
  res.send('express works')
})
app.use('/api',userRoute)
app.use('/api',cropRoute)
app.use('/api',orderRoute)
app.use('/api',contractRoute)



const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})