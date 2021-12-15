import React from "react";
import { useState } from "react";


const Createleave=()=>
{
 

  const [leavedata, setleavedata] = useState({
    Employee:"",
    leavetype:"",
    from_date:"",
    to_date:"",
    message:"",
    
  })

  const inputevent=(e)=>
  {
     const name=(e.target.name);
     const value=(e.target.value);
  
    setleavedata({...leavedata,[name]:value})
  }
  
  const postleavedata= async (e)=>
  {
    e.preventDefault();
  //Objectdestructuring
    const {Employee,leavetype,from_date,to_date,message}=leavedata;
  //fetch
  if (Employee && leavetype && from_date && to_date && message)
    {
      const result=await fetch("/createleave",{
       method:"POST",
       headers:{
        "Content-Type":"application/json"
      },
       body:JSON.stringify({
  
        Employee,
        leavetype,
        from_date,
        to_date,
        message,

        // or
        // leavedata
       })
    });
  //  const data =await res.json();
   //From auth.js /createleave
   console.log(result)

   // for clearing the form after submitting
    if(result)
    {
    setleavedata({
 
      Employee:"",
      leavetype:"",
      from_date:"",
      to_date:"",
      message:"",
      
       });
       alert("Leave submitted");
    }
     
    }
    else
    {
      alert("plz fill the form completely")
    }
  }

 
 

    return(
   <>
   <div className="container">
   <div className="row" >
   <div className="col-md-8 mx-auto my-5 p-5" id="leavecol">

   
   <h3 className="applyhead">Apply leave</h3>
   <form method="POST">
   <div className="mb-3 mt-3 ">
   <label for="exampleFormControlInput1" className="form-label">Employee name</label>
   <input type="text" name="Employee" className="form-control" id="exampleFormControlInput1"   
   value={leavedata.Employee} 
   onChange={inputevent}/>
   </div>

   <div className="mb-3 ">
   <label for="exampleFormControlInput1" className="form-label">Leave-type</label>
   <input type="text" 
   name="leavetype" 
   className="form-control" id="exampleFormControlInput1"  
   value={leavedata.leavetype} 
   onChange={inputevent}/>
   </div>
  
   <div className="mb-3">
   <label for="exampleFormControlTextarea1" className="form-label">From Date</label>
   <input type="date" name="from_date" 
   className="form-control" id="exampleFormControlInput1" 
    value={leavedata.from_date} 
   onChange={inputevent}/>
   </div>

   <div className="mb-3">
   <label for="exampleFormControlTextarea1" className="form-label">To Date</label>
   <input type="date" name="to_date" className="form-control" 
   id="exampleFormControlInput1" 
   
   value={leavedata.to_date} onChange={inputevent}/>
   </div>
   
   <div className="mb-3">
   <label for="exampleFormControlTextarea1" className="form-label">Message</label>
   <input type="text" className="form-control" name="message" 
   id="exampleFormControlTextarea1" rows="3" 
   value={leavedata.message} 
   onChange={inputevent}/>
   </div>

   <div className="mb-3">
   <button type="submit"  className="btn btn-success" onClick={postleavedata}>Apply leave</button>
   </div>

   </form>
   
   
   
    </div>
    </div>
   </div>
   </>
    );
}
export default Createleave;