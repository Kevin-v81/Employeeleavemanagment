import React,{useState} from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Register=()=>
{
//react-router history
const history =useHistory();

const [userdata, setuserdata] = useState({
  name:"",
  email:"",
  phone:"",
  work:"",
  password:"",
  cpassword:"",
})


const inputevent=(e)=>
{
   const name=(e.target.name);
   const value=(e.target.value);

  setuserdata({...userdata,[name]:value})
}

const postdata= async (e)=>
{
  e.preventDefault();
//Objectdestructuring
  const {name,email,phone,work,password,cpassword}=userdata;
//fetch
  const res=await fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({

      name,
      email,
      phone,
      work,
      password,
      cpassword
    })
  });

const data =await res.json();
//From auth.js /register
if(data.status===422 || !data)
{
  alert("Invalid Registration");
  console.log("Invalid Registration");
}
else if({email:email})
{
  alert("Registered succesfully")
  history.push("/login")

}
else if(password !== cpassword)
{
  alert("password doesnt match")
}
}



    return(
<>
<div className="container">

<div  className="regpage">

<div className="row " >
{/* Left column */}
<div className="col-sm-6 p-5  mx-auto my-5 " id="regleft">
<h1 className="reghead">SignUp</h1>

<form method="POST">

  <div className="mb-3 mt-3">
  
    <input type="name" 
    className="form-control" 
    id="name" 
    placeholder="Enter name" 
    autoComplete="off"
    value={userdata.name}
    onChange={inputevent}
    name="name"/>
  </div>
  <div className="mb-3 mt-3">
    <input type="email" 
    className="form-control" 
    id="email" 
    placeholder="Enter email" 
    autoComplete="off"
    value={userdata.email}
    onChange={inputevent}
    name="email"/>
  </div>
  <div className="mb-3">
     <input type="phone" 
    className="form-control" 
    id="phone" 
    placeholder="Phone number" 
    autoComplete="off"
    value={userdata.phone}
    onChange={inputevent}
    name="phone"/>
  </div>
  <div className="mb-3 mt-3">
    <input type="work" 
    className="form-control" 
    id="work" 
    placeholder="Enter profession" 
    autoComplete="off"
    value={userdata.work}
    onChange={inputevent}
    name="work"/>
  </div>
  <div className="mb-3 mt-3">
    <input type="password" 
    className="form-control" 
    id="pwsd" 
    placeholder="create password" 
    autoComplete="off"
    value={userdata.password}
    onChange={inputevent}
    name="password"/>
  </div>
  <div className="mb-3 mt-3">
    <input type="cpassword" 
    className="form-control" 
    id="cpwsd" 
    placeholder="confirm password" 
    autoComplete="off"
    value={userdata.cpassword}
    onChange={inputevent}
    name="cpassword"/>
  </div>
  <button type="submit" className="btn btn-primary mb-3" onClick={postdata}>Register</button>
</form> 

<p className="regpara">Already have an account?</p>
<NavLink  to="/login" className="reg-button"><i class="zmdi zmdi-accounts"></i>login</NavLink>
</div>





</div>
</div>
</div>




</>


    );
}

export default Register;