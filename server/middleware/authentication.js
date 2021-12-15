//For token generation
const jwt=require("jsonwebtoken");
// From models folder (userschema)
const User=require("../models/userSchema");


const authenticate= async (req,res,next)=>
{
try {
    const token=req.cookies.jwtoken;
    const verifyToken=jwt.verify(token, process.env.SECRETKEY)

    const verifiedUser=await User.findOne({_id:verifyToken._id, "tokens.token":token});
   
   if(!verifiedUser)
    {
       throw new Error('User not found')
    }
    
     req.token = token;
     req.verifiedUser = verifiedUser;
     req.userID = verifiedUser._id;
   
   next();

   
} catch (error) {
    
    res.status(401).send("Unauthorized no token provided");
    console.log(error);
}
}


module.exports = authenticate;