import React from "react";
import { NavLink } from "react-router-dom";
import rightimage from "./Video-Conference-Illustration.jpg";

const Home=()=>
{
    return(
       <>
         {/*  hero section  */}
        <div className="header_hero">
        <div className="container" >
          <div className="row">
            {/*  left side column */}
            <div className="col-lg-6  col-10 mx-auto " id="leftcolumn">
            <h1 className="home-head"> Grow your Business with
            <strong className="home-stronghead"> Cloud Nine</strong>
            </h1>
            <h2 className="home-head2">
            Team of talented developers making websites.
            </h2>
            <h2 className="home-head3">
            Showcase your skills and carrer fit.
            </h2>
              <p className="home-quotepara">“The first 90% of the code accounts 
              for the first 90% of the development time.The remaining 10% of the 
              code accounts for the other 90% of the development time.” 
            –Tom Cargill
              </p>
                 <NavLink  to="/contact" className="home-button">Get Started</NavLink>
            </div>


            {/*  Right side column  */}
            <div class="col-lg-6   col-10 mx-auto" id="rightcolumn">
            <img src={rightimage} className="rightimage" alt="rightimage"/>

            </div>
            </div>
        </div>
        </div>
        </>   
    );
}

export default  Home;