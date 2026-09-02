const commentModel = require('../models/comment.model')
const postModel = require('../models/post.model');
const userModel = require('../models/user.model');

const addComment = async (req,res)=>{
    //need post id and user id
    const postID = req.params.post 
    const userID = req.userID;
    const comment = req.body.comment
    if(!comment){
        return res.status(404).json({
            message:"comment is empty",
            success:false
        })
    }

    try {
        const newComment = await commentModel.create({author:userID,post:postID,comment:comment})
        await Promise.all([
            postModel.findByIdAndUpdate(postID,{$push:{comments:newComment._id}})
        ])
        res.status(201).json({
            message:"comment added",
            success:true
        })
    } catch (error) {
        console.log("error:",error)
        res.status(500).json({message:"internal server error"})
    }

}

const deleteComment = async (req,res)=>{
    const commentID = req.params.comment
    const userID = req.userID
    try {
        const targetComment = await commentModel.findById(commentID)
        const isAuthor = targetComment.author === userID;
        const postID = targetComment.post;

        if(!isAuthor){
            return res.status(403).json({
                message:"cannot delete other's comments",
                success:false
            })
        }

        await Promise.all([
            commentModel.findByIdAndDelete(commentID),
            postModel.findByIdAndUpdate(postID,{$pull:{comments:commentID}})
        ])

        res.status(200).json({
            message:"comment deleted",
            success:true
        })

    } catch (error) {
        console.log("error: ",error)
        res.status(500).json({message:"internal server error"})
    }
}

const editComment = async (req,res)=>{
    const commentID = req.params.comment
    const newComment = req.body.comment
    const userID = req.userID
    try {
        const targetComment = await commentModel.findById(commentID)
        const isAuthor = targetComment.author === userID;
        if(!isAuthor){
            return res.status(403).json({
                message:"cannot edit other's comments",
                success:false
            })
        }

        await commentModel.findByIdAndUpdate(commentID,{comment:newComment})

        res.status(200).json({
            message:"comment updated",
            success:true
        })

    } catch (error) {
        console.log("error: ",error)
        res.status(500).json({message:"internal server error"})
    }
}

module.exports = {addComment,deleteComment,editComment} ;