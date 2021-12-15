import React,{ useEffect, useState }  from "react";
import { useHistory } from "react-router";
import image from "./executive.png";

const Aboutme=()=>
{
const history = useHistory();

const [userdata,setuserdata]=useState({});

const callaboutpage= async ()=>
{
    try {
        const res = await fetch("/aboutme",{
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
        history.push("/login");
    }
    }

   useEffect(
        ()=>{
            callaboutpage();
        },);

return(

        <>
         <div className="container p-3  bg-info col-lg-3" id="aboutcontainer">

         <form method="GET">
         <h1 className="Abouthead ">Profile</h1>
{/* Row1 */}
         <div className="row  " id="row1aboutme">
       
         <div className="col-md-6  " id="r1col1aboutme">
             <img src={image} className="aboutmepic" alt="profilepic"></img>
         </div>

         <div className="col-md-6 pt-4" id="r1col2aboutme">
             <h5 className="h5aboutme">{userdata.name}</h5>
             <h5 className="h5aboutme2">{userdata.work}</h5>
         </div>

        </div>

  {/* ROW2 */}
            <div className="row ">
            
            <div className="col-md-5 "  id="aboutme1">
            <label style={{position: "relative",left: "11px"}}>User Id</label>
            </div>
            <div className="col-md-8 "id="aboutme2">{userdata._id}</div>
             </div>

             <div className="row">
            <div className="col-md-6"  id="aboutme1">
            <label>Name</label>
            </div>
            <div className="col-md-6 "id="aboutme2">{userdata.name}</div>
            </div>

            <div className="row">
            <div className="col-md-6"  id="aboutme1">
            <label>Phone</label>
            </div>
            <div className="col-md-6 "id="aboutme2">{userdata.phone}</div>
            </div>


            <div className="row">
            <div className="col-md-6"  id="aboutme1">
            <label>Email</label>
            </div>
            <div className="col-md-6 "id="aboutme2">{userdata.email}</div>
            </div>

            <div className="row">
            <div className="col-md-6 "  id="aboutme1">
            <label>Profession</label>
            </div>
            <div className="col-md-6 "id="aboutme2">{userdata.work}</div>
            </div>

         
         </form>
         
         </div>
        </>
    );
}

export default  Aboutme;