const mongoose = require('mongoose')
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to DB")
    }catch(err){
        console.log("error connecting to DB:",err);
    }
}
module.exports = connectDB;