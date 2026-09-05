//models
const userModel = require('../models/user.model')

//tools
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Services
const uploadImage = require('../services/storage.service')

//For registering new users
const register = async (req,res) =>{
    try{
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            return res.status(401).json({
                message:"Please fill all the given fields",
                success:false
            })
        }
        const userExist = await userModel.findOne({email:email});
        if(userExist){
            return res.status(401).json({
                message:"Email is already registered",
                success:false
            })
        }
        const hash = await bcrypt.hash(password,10);
        const user = await userModel.create({username:username,email:email,password:hash})
        res.status(201).json({
            message:"New user registered successfully",
            user:user,
            success:true
        });
    }catch(err){
        console.log("error:",err);
    }
    

}

//For login registered users
const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Please fill all the fields",
                success:false
            })
        }
        const user = await userModel.findOne({email:email});
        if(!user){
            return res.status(401).json({
                message:"Email not registered",
                success:false
            })
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            return res.status(401).json({
                message:"Incorrect Password",
                success:false
            })
        }

        const token = await jwt.sign({
            id:user._id,
            username:user.username
        },process.env.JWT_SECRET)

        res.cookie('token',token);
        res.status(200).json({
            message:"Logged in successfully",
            success:true
        })

    }catch(err){
        console.log("error while login:",err);
    }
}

//for logging out current user
const logout = (req,res)=>{
    res.clearCookie('token');
    res.status(200).json({
        message:"Logged out successfully",
        success:true
    })
}

//Profile information !!! msg "user found" even if the username doesnt exist => solved
const getProfile = async (req,res)=>{
    const username = req.params.username;

    try {
        const user = await userModel.findOne({username:username}).select('-password');
        if(!user){
            return res.status(404).json({
                message:"username not found",
                success:false
            })
        }
        res.status(200).json({
            message:"User found",
            user:user
        })
    } catch (error) {
        console.log("error while finding user:",error);
    }
    
}

//Update profile
const editProfile = async (req,res)=>{
    try {
        const {username,bio,email} = req.body;
        const buffer = req.file;
        const pfp = await uploadImage(buffer)
        const user = await userModel.findByIdAndUpdate(req.userID,{username:username,pfp:pfp.url,bio:bio,email:email})
        res.status(200).json({
            message:"profile updated",
        })
    } catch (error) {
        console.log("error:",error);
    }
}

const getSuggestedUser = async (req,res) =>{
    try {
        const suggestedUsers = await userModel.find({_id:{$ne:req.id}}).select("-password")
        if(!suggestedUsers){
            return res.status(404).json({
                message:"No suggested users"
            })
        }
        res.status(200).json({
            message:"Found suggested users",
            suggestedUsers:suggestedUsers
        })
    } catch (error) {
        console.log("error:",error);
    }
}

//I have to design the follow and unfollow logic => done
//throws error when username doesnt exists
const followUnfollow = async (req,res)=>{
    const targetUsername = req.params.username; //req.userID = user's username (from isLoggedIn middleware)
    try {
        const targetUser = await userModel.findOne({username:targetUsername}).select("-password")
        const user = await userModel.findById(req.userID).select("-password")
        if(!targetUser || !user){
            return res.status(404).json({
                message:"username not found",
                success:false
            })
        }
        if(user.following.includes(targetUser._id)){
            //unfollow
            await Promise.all([
                userModel.findByIdAndUpdate(user._id,{$pull:{following:targetUser._id}}),
                userModel.findByIdAndUpdate(targetUser._id,{$pull:{followers:user._id}})
            ])
        }else{
            //follow
            await Promise.all([
                userModel.findByIdAndUpdate(user._id,{$push:{following:targetUser._id}}),
                userModel.findByIdAndUpdate(targetUser._id,{$push:{followers:user._id}})
            ])
        }
        res.status(200).json({
            message:"Following status uppdated",
            success:true
        })
    } catch (error) {
        console.log("error:",error)
    }
}

module.exports = {register,login,logout,getProfile,editProfile,getSuggestedUser,followUnfollow}