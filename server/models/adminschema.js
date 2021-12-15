const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');

//dotenv config
dotenv.config({path:'./config.env'});

//admin Schema
const adminSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        cpassword:{
            type:String,
            required:true
        },
        // create array of an object tokens for jwttoken
        tokens:[{

            token:{
                type:String,
                required:true
            }
        }]
    }
)

//Hashing the password [ASYNC-await]
adminSchema.pre('save',async function myfunc(next){
    try{ 
        if(this.isModified('password'))
    {
        this.password= await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
 } 
 catch(error)
 {
     console.log(error)
 }
    
 });
 //Generating a Token
 adminSchema.methods.generateAuthToken= async function myfunc(){
    try {
        
        let tokenjwt= jwt.sign({_id:this._id} , process.env.SECRETKEY)
        //from array of object userschema(tokens)
        this.tokens= this.tokens.concat({token:tokenjwt})
        //saving the token in atlas
        await this.save();
        return tokenjwt;
    
    } catch (error) 
    {
        console.log(error);
    }    
    }
    
//model
const Admin=new mongoose.model("Admin",adminSchema);
    
//Exporting the Usercollection
module.exports=Admin;