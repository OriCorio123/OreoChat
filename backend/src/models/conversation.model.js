const mongoose = require('mongoose')
const conversationSchema = new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    message:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'message'
    }]
})

const conversationModel = mongoose.model("conversation",conversationSchema)
module.exports = conversationModel;