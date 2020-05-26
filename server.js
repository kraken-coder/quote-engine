const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()

const connectDB = require('./config/db')

//  middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


//  routes
app.use('/api/register', require('./routes/User'))
app.use('/api/auth', require('./routes/auth'))


// funcs
connectDB()

const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log('server up and running'))
