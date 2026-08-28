const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    message:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
},{timestamps:true})

const messageModel = mongoose.model("message",messageSchema)
module.exports = messageModel;