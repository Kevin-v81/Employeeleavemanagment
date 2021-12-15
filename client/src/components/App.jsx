import React from "react";
import {Switch, Route } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Adminlogin from "./Adminlogin";
import Errorpage from "./Errorpage";
import Emplogout from "./Emplogout";
import Admindash from "./Admindashboard";
import Adminlogout from "./Adminlogout";
import Createleave from "./Createleave";
import Adminwelcome from "./Adminwelcome";

const App=()=>
{
    return(

          <>
          <Navbar></Navbar>
          
          <Switch>
          <Route exact   path="/" component={Home}/>
          <Route         path="/aboutme" component={AboutMe}/>
          <Route         path="/contact" component={Contact}/>
          <Route         path="/login" component={Login}/>
          <Route         path="/register" component={Register}/>
          <Route         path="/emplogout" component={Emplogout}/>
          <Route         path="/createleave" component={Createleave}/>
          <Route         path="/adminlogin" component={Adminlogin}/>
          <Route         path="/adminlogout" component={Adminlogout}/>
           <Route        path="/adminwelcome" component={Adminwelcome}/>
          <Route         path="/admindash" component={Admindash}/>

          <Route component={Errorpage}/>
          {/* <Redirect   to="/"/> */}
          </Switch>
              
        
        
          </>

    );

}
export default App;