const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

//importing routes
const userRoute = require('./routes/user.route')

//Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//Routes
app.use('/api/user',userRoute)


module.exports = app;