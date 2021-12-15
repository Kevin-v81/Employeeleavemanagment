import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const Adminlogin=()=>
{
   //react-router history
   const history=useHistory();


   const [email, setemail] = useState();
   const [password, setpassword] = useState();
 
   const inputevent1=(e)=>
   {
     setemail(e.target.value)
   }
   const inputevent2=(e)=>
   {
     setpassword(e.target.value)
   }
 
   const loginuser= async (e)=>
   {
         e.preventDefault();
 
         const res = await fetch("/adminsignin",{
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({
           email,
           password,
         })
       });
     
     const data =await res.json();
     // console.log(data);
 
     //From /adminsignin auth.js
     if(res.status===402 || !data)
     {
       alert("invalid credentials");
 
     }
     else{
       alert("Login succesfull");
       history.push("/adminwelcome")
     }
 
   }
    return(
      <>
      <div className='container'>
    
    <div className="row">
    
    <div className="col-sm-6 p-5 mx-auto my-5" id="login_div">
    <h1 className="loghead">Admin login</h1>

    <form method="POST">
  <div className="mb-3 mt-3">
    <label for="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={inputevent1}/>
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={inputevent2}/>
  </div>
  
  <button type="submit" className="btn btn-primary mb-3" onClick={loginuser}>Login</button>

   </form> 
 

     </div>
    </div>
   </div>
        </>
    )
}
export default Adminlogin;