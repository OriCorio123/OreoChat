const jwt = require('jsonwebtoken')

const isLogin = async (req,res,next) => {
    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({
                message:"User not logged in",
                success:false
            })
        }

        const decoded = await jwt.verify(token,process.env.JWT_SECRET) //token => decoded={id,username}

        if(!decoded){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        }       

        req.userID = decoded.id;
        next();

    } catch (error) {
        console.log("error:",error);
    }
}

module.exports = isLogin;