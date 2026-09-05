const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

//importing routes
const userRoute = require('./routes/user.route')
const postRoute = require('./routes/post.route')
const commentRoute = require('./routes/comment.route')

//Middlewares
app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true                
}));

//Routes
app.use('/api/user',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/comment',commentRoute)


module.exports = app;