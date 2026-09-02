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
            return res.status(404).json({
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
    try {
        const user = await userModel.findById(req.userID).select("posts");
        if(!(user.posts.includes(postID))){
            return res.status(403).json({
                message:"cannot delete other's post",
                success:false
            })
        }

        await Promise.all([
            postModel.findByIdAndDelete(postID),
            userModel.findByIdAndUpdate(req.userID,{$pull:{posts:postID}})
        ])
        res.status(200).json({
            message:"post deleted successfully"
        })

    } catch (error) {
        console.log(error)
    }
}


const updatePost = async (req,res) =>{
    const postID = req.params.post;
    const updatedCaption = req.body.updatedCaption;
    try {
        const user = await userModel.findById(req.userID).select("posts");
        if(!(user.posts.includes(postID))){
            return res.status(403).json({
                message:"cannot delete other's post",
                success:false
            })
        }

        await postModel.findByIdAndUpdate(postID,{caption:updatedCaption})
        res.status(200).json({
            message:"post updated successfully",
            success:true
        })  
    } catch (error) {
        console.log(error)
    }
}

const likePost = async (req,res)=>{
    try {
        const postID = req.params.post;
        if(!postID){
            return res.status(404).json({
                message:"cannot get post"
            })
        }
        const userID = req.userID;
        const likedUsers = await postModel.findById(postID).select("likes");
        const isLiked = likedUsers.likes.includes(userID)
        if(isLiked){
            //unlike
            await Promise.all([
                postModel.findByIdAndUpdate(postID,{$pull:{likes:userID}}),
                userModel.findByIdAndUpdate(userID,{$pull:{likes:postID}})
            ])
            res.status(200).json({
                message:"Post unliked"
            })

        }else{
            //like
            await Promise.all([
                postModel.findByIdAndUpdate(postID,{$addToSet:{likes:userID}}),
                userModel.findByIdAndUpdate(userID,{$addToSet:{likes:postID}})
            ])
            res.status(200).json({
                message:"Post liked"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Server error"
        })
    }
}

module.exports = {uploadPost,deletePost,updatePost,likePost};