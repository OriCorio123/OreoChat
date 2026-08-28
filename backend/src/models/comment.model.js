const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    comment:{
        type:String,
        required:true,
        maxlength:500
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }
},{timestamps:true})

const commentModel = mongoose.model("comment",commentSchema)
module.exports = commentModel;