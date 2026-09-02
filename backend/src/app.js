const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

//importing routes
const userRoute = require('./routes/user.route')
const postRoute = require('./routes/post.route')

//Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//Routes
app.use('/api/user',userRoute)
app.use('/api/posts',postRoute)


module.exports = app;