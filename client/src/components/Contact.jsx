import React from "react";
import { useEffect, useState }  from "react";


const Contact=()=>
{
    

const [userdata,setuserdata]=useState({});


const contactus= async ()=>
{
    try {
        const res = await fetch("/contactdata",{
            method:"GET",
            headers:{
               
              "Content-Type":"application/json"
            },
           
           
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
        console.log(error)
    }
    }

   useEffect(
        ()=>{
            contactus();
        },);

//For onclick alert
    function myfunc()
    {
        alert("thank you")
    }
    return(

        <>
         <div className="container">
            <div className="row my-5">
                   
                <div class="col-sm-3 p-3 mx-1 bg-info"><span className="iconify" data-icon="icon-park:email-block"></span> Email :
                   <span className='contact2'> cloud9ct@gmail.com</span></div>
                <div class="col-sm-3 p-3  mx-1 bg-info"><span className="iconify" data-icon="bi:phone"></span> Phone :
                   <span className='contact2'> 9862548974</span></div>
                <div class="col-sm-3 p-3  mx-1 bg-info"> <span class="iconify" data-icon="akar-icons:location"></span> Address : 
                   <span className='contact2'> Bangalore,India</span></div>
                <div class="col-sm-2 p-3  mx-1 bg-info"> <span class="iconify" data-icon="si-glyph:customer-support"></span> service : 
                <span className='contact2'> 1801-12-2345</span></div>
                
            </div>

            <div className="row">
            <div className="col-sm-6  mx-auto p-4 my-3" id="contactrow2">
            <h1 className="contacthead my-3">Get in touch</h1>

            <div className="row">
            <div className="col-sm-10 mx-auto ">

            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name:</label>
            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="your name" value={userdata.name}/>
            </div>

            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address:</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={userdata.email}/>
            </div>

            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="button" className="btn btn-info" onClick={myfunc}>Send message</button>

            </div>
            </div>

            </div>
            
            </div>
            </div>


         
        </>
    );
}

export default  Contact;