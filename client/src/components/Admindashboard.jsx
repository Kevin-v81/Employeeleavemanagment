import React,{useState,useEffect} from "react";
// import { NavLink } from "react-router-dom";
import image from "./executive.png"
import { useHistory } from "react-router";


const Admindash=()=>
{

const history = useHistory();

const [userdata,setuserdata]=useState({});

const callaboutpage= async ()=>
{
    try {
        const res = await fetch("/aboutmedash",{
            method:"GET",
            headers:{
                Accept:"application/json",
              "Content-Type":"application/json"
            },
           credentials:"include"
           
          });
        
        const data =await res.json();
        console.log(data);
         //From reacthooks
        setuserdata(data);
    
        if(!res.status===200)
        {
            const error = new Error(res.error)
            throw error;
        }
    } catch (error) {
        history.push("/");
    }
    }

   useEffect(
        ()=>{
            callaboutpage();
        },);

const userdelete= async ()=>
{
try {
    const res = await fetch("/register",{
                method:"DELETE",
                headers:{
                                               
                "Content-Type":"application/json"
                },
                                           
                                           
                });
                                        
                // const data =await res.json();
                // console.log(data);
                    
                if(res)
                {
                    alert("user deleted")
                    history.push("/")
                }
                } catch (error) 
                {
                console.log(error)
                }
                    }      

const [userleavedata,setleavedata]=useState({});
const leavedata= async ()=>
{
try {
        const res = await fetch("/createleave",{
                    method:"GET",
                    headers:{
                       
                      "Content-Type":"application/json"
                    },
                   
                   
                  });
                
                const data =await res.json();
                console.log(data);
                 //From reacthooks
                 setleavedata(data);
                
                if(!res.status===200)
                {
                    const error = new Error(res.error)
                    throw error;
                }
            } catch (error) {
                console.log(error)
            }
            }
        
           useEffect(
                ()=>{
                    leavedata();
                },);  


const leavedelete= async ()=>
{
try {
    const res = await fetch("/createleave",{
                method:"DELETE",
                headers:{
                                       
                "Content-Type":"application/json"
                },
                                   
                                   
            });
                                
            // const data =await res.json();
            // console.log(data);
            
            if(res)
            {
                
                history.push("/")
            }
            } catch (error) 
            {
            console.log(error)
            }
            }
                        
                
    return(
<>
      <h1 className="welcomeadmin my-3">Admin dashboard</h1>
      {/* <NavLink className="navilink" activeClassName="menu_link" to="/adminlogout">admin Logout</NavLink> */}
      <div className="container my-4">
      <div className="row">
      {/* MAIN COLUMN 1*/}
      <div className="col-md-12 bg-primary">
      <h3 className="dashhead">Employee information</h3>
      {/* Leftrow1 */}
       <div className="row  " id="row1aboutme">
       
       {/* Leftcolumn1 */}
       <div className="col-md-6  " id="r1col1aboutme">
           <img src={image} className="aboutmepic" alt="profilepic"></img>
       </div>
       {/* Leftcolumn2 */}
       <div className="col-md-6 pt-4" id="r1col2aboutme">
           <h5 className="h5aboutme text-white">{userdata.name}</h5>
           <h5 className="h5aboutme2">{userdata.work}</h5>
       </div>
       </div>

        {/* Leftrow2 */}
       <div className="row my-2 ">
       {/* Leftcolumn3 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>User Id</label>
        </div>
         {/* Leftcolumn4 */}
        <div className="col-md-6 text-dark "id="aboutme2">{userdata._id}</div>
        </div>

        {/* Leftrow3 */}
        <div className="row my-2 ">
       {/* Leftcolumn5 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>Name</label>
        </div>
        {/* Leftcolumn6 */}
        <div className="col-md-6 text-dark "id="aboutme2">{userdata.name}</div>
        </div>

       {/* Leftrow4 */}
       <div className="row my-2 ">
       {/* Leftcolumn7 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>Email ID</label>
        </div>
        {/* Leftcolumn8 */}
        <div className="col-md-6 text-dark "id="aboutme2">{userdata.email}</div>
        </div>

        {/* Leftrow5 */}
        <div className="row my-2 ">
         {/* Leftcolumn9 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>Phone</label>
        </div>
        {/* Leftcolumn10 */}
        <div className="col-md-6 text-dark "  id="aboutme2">{userdata.phone}</div>
        </div>


        {/* Leftrow6 */}
       <div className="row my-2 ">
       {/* Leftcolumn11 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>Profession</label>
        </div>
        {/* Leftcolumn12 */}
        <div className="col-md-6 text-dark "  id="aboutme2">{userdata.work}</div>
        </div>

        {/* Leftrow7 */}
        <div className="row my-2 ">
        {/* Leftcolumn13 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>Employee Ratings</label>
        </div>
        {/* Leftcolumn14 */}
        <div className="col-md-6 text-dark"  id="aboutme2">⭐⭐⭐⭐</div>
        </div>
           
      </div>
      
      <button type="button" onClick={userdelete} class="btn btn-danger">delete</button>
       {/* MAIN COLUMN 2*/}
      <div class="col-md-12 bg-dark text-white p-3">

      <h3 className="dashhead">Employee Leave information</h3>
     {/* Leftrow2 */}
     <div className="row my-2 ">
       {/* Leftcolumn3 */}
        <div className="col-md-6 mt-3 "  id="aboutme1">
        <label>Employee name</label>
        </div>
         {/* Leftcolumn4 */}
        <div className="col-md-6 mt-3 text-white "id="aboutme2">{userleavedata.Employee}</div>
        </div>

        {/* Leftrow3 */}
        <div className="row my-2 ">
       {/* Leftcolumn5 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>Leave type</label>
        </div>
        {/* Leftcolumn6 */}
        <div className="col-md-6 text-white "id="aboutme2">{userleavedata.leavetype}</div>
        </div>

       {/* Leftrow4 */}
       <div className="row my-2 ">
       {/* Leftcolumn7 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>Leave-date-from</label>
        </div>
        {/* Leftcolumn8 */}
        <div className="col-md-6 text-white "id="aboutme2">{userleavedata.from_date}</div>
        </div>

        {/* Leftrow5 */}
        <div className="row my-2 ">
         {/* Leftcolumn9 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>Leave-date-to</label>
        </div>
        {/* Leftcolumn10 */}
        <div className="col-md-6 text-white "  id="aboutme2">{userleavedata.to_date}</div>
        </div>


        {/* Leftrow6 */}
       <div className="row my-2 ">
       {/* Leftcolumn11 */}
        <div className="col-md-6 "  id="aboutme1">
        <label>Message</label>
        </div>
        {/* Leftcolumn12 */}
        <div className="col-md-6 text-white "  id="aboutme2">{userleavedata.message}</div>
        </div>
        
      </div>
       <button type="button" onClick={()=>{alert("leave granted")}} class="btn-success">Grant</button>
      <button type="button" onClick={leavedelete} class="btn btn-danger">Reject</button>
      </div>

      </div>

</>

    );


}

export default Admindash;