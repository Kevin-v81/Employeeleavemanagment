import React from "react";
import {NavLink} from "react-router-dom";
import image1 from "./Cloudimg.png";
import image2 from "./Cloud9.png";

const Navbar=()=>
{

return(
          <>
         
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <img src={image1} className="navbarimg1" alt="navimage1"/>
  <img src={image2} className="navbarimg2" alt="navimage2"/>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <ul className="navbar-nav ms-auto">

        <li className="nav-item">
        <NavLink className="navilink" activeClassName="menu_link" to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item">
        <NavLink className="navilink" activeClassName="menu_link" to="/aboutme">AboutMe </NavLink>
        </li> */}
        <li className="nav-item">
        <NavLink className="navilink" activeClassName="menu_link" to="/contact">ContactUs</NavLink>
        </li>    
        {/* <li className="nav-item">
        <NavLink className="navilink" activeClassName="menu_link" to="/login">Login</NavLink>
        </li>  */}
       

        <li className="nav-item">
        <NavLink className="navilink" activeClassName="menu_link" to="/register">Register</NavLink>
        </li>
        {/* <li className="nav-item">
        <NavLink className="navilink" activeClassName="menu_link" to="/emplogout">Logout</NavLink>
        </li>  */}
         <NavLink  to="/adminlogin" className="admin-button">Admin login</NavLink>


         
      {/* Dropdown */}
      <div class="btn-group">
      <button type="button" class="btn btn-primary" id= "loginbtn" style={{padding:"3px"}}> 
      <NavLink className="navilink" to="/login" style={{color:"white"}}>Login</NavLink>
      </button>
      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" 
      data-bs-toggle="dropdown" aria-expanded="false" 
      style={{height: "33px" ,padding:"3px"}} id="loginbtn2"
      >

      <span class="visually-hidden">Toggle Dropdown</span>
     </button>
      <ul class="dropdown-menu">
      <li className="nav-item">
        <NavLink className="navilink" activeClassName="menu_link" to="/aboutme">Profile</NavLink>
      </li>
     <li className="nav-item">
        <NavLink className="navilink" activeClassName="menu_link" to="/emplogout">Logout</NavLink>
       </li> 
       <li>
       <NavLink className="navilink" activeClassName="menu_link" to="/createleave">Apply leave</NavLink>
       </li>
       <li>
       <NavLink className="navilink" activeClassName="menu_link" to="/admindash">admindash</NavLink>
        </li>
      
       
       </ul>
       </div>

      </ul>
      
    </div>
 </div>
</nav>




          </>

    );

}
export default Navbar;