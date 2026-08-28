const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    pfp:{
        type:String,
        default:"https://img.icons8.com/?size=100&id=tZuAOUGm9AuS&format=png&color=000000"
    },
    bio:{
        type:String,
        default:""
    },
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }],
    bookmarks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
    
    
},{timestamps:true})

const userModel = mongoose.model("user",userSchema)
module.exports = userModel;