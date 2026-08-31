const userModel = require('../models/user.model')
const postModel = require('../models/post.model')
const commentModel = require('../models/comment.model');
const uploadImage = require('../services/storage.service');

//upload posts
const uploadPost = async (req,res) =>{
    try {
        const {caption} = req.body;
        const id = req.userID; //from isLoggedIn middleware req.userID
        if(!caption || !req.file){
            return res.status(400).json({
                message:"Caption or file is missing",
                success:false
            })
        }
        const post = await uploadImage(req.file)
        const postUrl = post.url;
        const uploadedPost = await postModel.create({image:postUrl,caption:caption,author:id})
        await userModel.findByIdAndUpdate(id,{$addToSet:{posts:uploadedPost._id}})
        res.status(201).json({
            message:"post created successfully",
            success:true
        })
    } catch (error) {
        console.log("error",error);
    }
}

const deletePost = async (req,res)=>{
    const postID = req.params.post
    await Promise.all([
        postModel.findByIdAndDelete(postID),
        userModel.findByIdAndUpdate(req.userID,{$pull:{posts:postID}})
    ])
    res.status(200).json({
        message:"post deleted successfully"
    })
}

module.exports = {uploadPost,deletePost};