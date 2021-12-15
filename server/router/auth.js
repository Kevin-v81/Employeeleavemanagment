const express =require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const authenticate=require('../middleware/authentication');
// From models folder (userschema)
const User=require("../models/userSchema");
const Admin = require('../models/adminschema');
const Leave=require("../models/leaveschema");


router.get("/",(req,res)=>
 {
    
    res.send("hello home page from router express ")
 });


//Login  (req using PostMan) [SYNC method]
//  router.post('/register',(req,res)=>
//  {
//     //Object destructuring
//    const {name,email,phone,work,password,cpassword}=req.body;
//  //    console.log(req.body);
//  //    console.log(name);
//  //    console.log(email);

//  //    res.json({message:req.body});
//  //    res.send("My register page from router express");

//  if(!name || !email || !phone || !work || !password || !cpassword)
//  {
//    //return res.json({error:"plz fill the form compeletly"})
//                               //OR
//    return res.status(422).json({error:"plz fill the form compeletly"})
//  }

//  //Read or query
//  User.findOne({email:email})
//  .then((userExist)=>{
//     if(userExist)
//     //same email is repeated
//     {
//         return res.status(422).json({error:"Email address already exists"});
//     }
//     else
//     //creating new document(user) inside collection name(User)
//     {
//       const user=new User(
//           {name,email,phone,work,password,cpassword
//         });
//         //for saving the file
//       user.save()
//       .then(()=>{res.status(201).json({message:"sucessfuly stored"})})
//       .catch(()=>{res.status(500).json({error:"register failed"})})
//     }
// })
// .catch((err)=>{console.log(err)});

// })  

                                               // OR 

// Login  (req using PostMan) [ASYNC method]
router.post('/register',async (req,res)=>
{
   
try {
   //Object destructuring
   const {name,email,phone,work,password,cpassword}=req.body;
   //    console.log(req.body);
   //    console.log(name);
   //    console.log(email);
   
   //    res.json({message:req.body});
   //    res.send("My register page from router express");
   
   if(!name || !email || !phone || !work || !password || !cpassword)
   {
     //return res.json({error:"plz fill the form compeletly"})
                                //OR
     return res.status(422).json({error:"plz fill the form completely"})
   }
  
  //Read or query
  const userExist=await User.findOne({email:email})

   if(userExist)
   //if same email is repeated
   {
       return res.status(422).json({error:"Email address already exists"});
   }
   else if(password != cpassword)
   {
    return res.status(422).json({error:"password doesn't match"});
   }
   else
   //creating new document(user) inside collection name(User)
   {
     const user=new User(
         {name,email,phone,work,password,cpassword
    });
    //for saving the file in database
     const userRegister= await user.save();

      if(userRegister)
     {
       res.status(201).json({message:"sucessfuly stored"})
     }
     else
     {
       res.status(500).json({error:"register failed!"})
      }
   }
} catch (error) {
  console.log(error);
}

})

//login route to Signin (req using postman) [ASYNC method]
router.post('/signin',async (req,res)=>
{
 
  try {
    // res.json({message:req.body});
   // console.log(req.body);

  //Object Destructuring
  const{email,password}=req.body;

  if(!email || !password)
  {
    return res.status(402).json({error:"plz fill the form completely"})
  }

  //Read or Query email 
 const useremaillogin=await User.findOne({email:email})
 
 if(useremaillogin)
 {
        //query password
        const userpasswordlogin=await bcrypt.compare(password, useremaillogin.password);

        //generate jwt token
        let token=await useremaillogin.generateAuthToken();
        console.log(token);

      res.cookie("jwtoken",token,{expires:new Date(Date.now()+2589200000) ,httpOnly:true})

        if(!userpasswordlogin)
        {
          return res.status(402).json({error:"passcode error"})
          
        }
        else
        {
          return res.json({message:"login successfull"});
        }
 }
 else
 {
   return res.status(402).json({error:"email error"})
 }
 

//OR
//  if(!useremaillogin)
//  {
//   return res.json({message:"login failed wrong email "});
//  }
//  else if(!userpasswordlogin)
//  {
//   return res.json({message:"login failed wrong password"});
//  }
//  else {
//   return res.json({message:"login succesfull"});
//  }


} catch (error) 
  {
    console.log(error)
  }
})

//For Aboutme page authentication(middlewarefolder)
 router.get("/aboutme",authenticate,(req,res)=>
{
    // console.log("hello about page")
    res.send(req.verifiedUser);
})
//For navbar page authentication(middlewarefolder)
router.get("/contactdata",authenticate,(req,res)=>
{
    // console.log("hello about page")
    res.send(req.verifiedUser);
})

//For Employee Logout(clearing cookie) 
router.get("/emplogout",(req,res)=>
{
    res.clearCookie('jwtoken',{path:"/"});
    res.status(200).send('User Logout')
    
}) 
router.delete("/register" ,async (req,res)=>
{
  try {
       const result=await User.deleteOne()
       if(!result)
       {
        return res.status(402).json({msg:" error"})
       }
       

} catch (error) {
    console.log(error)
  }
})
                     //////////////////////ADMIN REGISTER////////////////////////////



router.post('/adminregister',async (req,res)=>
{
   
try {
   //Object destructuring
   const {email,password,cpassword}=req.body;
   //    console.log(req.body);
   
   //    console.log(email);
   
   //    res.json({message:req.body});
   //    res.send("My register page from router express");
   
   if( !email ||  !password || !cpassword)
   {
     //return res.json({error:"plz fill the form compeletly"})
                                //OR
     return res.status(422).json({error:"plz fill the form completely"})
   }
  
  //Read or query
  const adminExist=await Admin.findOne({email:email})

   if(adminExist)
   //if same email is repeated
   {
       return res.status(422).json({error:"Email address already exists"});
   }
   else if(password != cpassword)
   {
    return res.status(422).json({error:"password doesn't match"});
   }
   else
   //creating new document(admin) inside collection name(Admin)
   {
     const admin=new Admin(
         { email,password,cpassword
    });
    //for saving the file in database
     const adminRegister= await admin.save();

      if(adminRegister)
     {
       res.status(201).json({message:"sucessfuly stored"})
     }
     else
     {
       res.status(500).json({error:"register failed!"})
      }
   }
} catch (error) {
  console.log(error);
}

})
//adminlogin route to adminSignin (req using postman) [ASYNC method]
router.post('/adminsignin',async (req,res)=>
{
 
  try {
    // res.json({message:req.body});
   // console.log(req.body);

  //Object Destructuring
  const{email,password}=req.body;

  if(!email || !password)
  {
    return res.status(402).json({error:"plz fill the form completely"})
  }

  //Read or Query email 
 const adminemaillogin=await Admin.findOne({email:email})
 
 if(adminemaillogin)
 {
        //query password
        const adminpasswordlogin=await bcrypt.compare(password, adminemaillogin.password);

        // generate jwt token
        let token=await adminemaillogin.generateAuthToken();
        // console.log(token);

       res.cookie("jwtoken",token,{expires:new Date(Date.now()+2589200000) ,httpOnly:true})

        if(!adminpasswordlogin)
        {
          return res.status(402).json({error:"passcode error"})
          
        }
        else
        {
          return res.json({message:"login successfull"});
        }
 }
 else
 {
   return res.status(402).json({error:"email error"})
 }


} catch (error) 
  {
    console.log(error)
  }
})
//For Admin Logout(clearing cookie) 
router.get("/adminlogout",(req,res)=>
{
    res.clearCookie('jwtoken',{path:"/"});
    res.status(200).send('Admin Logout')
    
}) 
router.get("/aboutmedash",authenticate,(req,res)=>
{
    // console.log("hello about page")
    res.send(req.verifiedUser);
})


                     //////////////////////Leave apply////////////////////////////
router.post("/createleave", async (req,res)=>
{
try {
  //Obj decstructuring
    const {Employee,leavetype,from_date,to_date,message}=req.body;

    
      const leave=new Leave({ Employee,leavetype,from_date,to_date,message})

      const leaveapplied=await leave.save();
  
      console.log(leaveapplied);
  
      if(leaveapplied)
      {
        return res.status(200).json({msg:"sucessfull"})
  
      }
      else
      {
        return res.status(402).json({msg:" error"})
      }
    } 
  catch (error) 
  {
    console.log(error)
  }
}
)

router.get("/createleave" ,async (req,res)=>
{
  try {
       const result=await Leave.findOne()
       res.json(result)
} catch (error) {
    console.log(error)
  }
})
router.delete("/createleave" ,async (req,res)=>
{
  try {
       const result=await Leave.deleteOne()
       if(!result)
       {
        return res.status(402).json({msg:" error"})
       }
       

} catch (error) {
    console.log(error)
  }
})



module.exports=router;