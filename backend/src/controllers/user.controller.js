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
                messsage:"Incorrect Password",
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

//Profile information
const getProfile = async (req,res)=>{
    const username = req.params.username;

    try {
        const user = await userModel.findOne({username:username}).select('-password');
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

module.exports = {register,login,logout,getProfile,editProfile,getSuggestedUser}