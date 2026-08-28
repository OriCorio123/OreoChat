require('dotenv').config()
const app = require('./src/app');
const connectDB = require('./src/db')
app.listen(process.env.PORT || 3000,()=>{
    connectDB();
    console.log(`server is listening on ${process.env.PORT || 3000}`)
})