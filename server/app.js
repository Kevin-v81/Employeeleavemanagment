const express=require('express');
const app=express();
const mongoose =require('mongoose');
const dotenv=require('dotenv');
const cookieParser = require("cookie-parser");

//connection from atlas
// before dotenv configuration
// const DB="mongodb+srv://kevin:kevin88800@cluster0.mih2v.mongodb.net/empdata?retryWrites=true&w=majority";

//dotenv config from config.evn file
dotenv.config({path:'./config.env'});

//for securing port number using dotenv
const port=process.env.PORT;

//Mongoose connection from db folder
require('./db/connection.js');

//from leaveschema [Note:very important]
app.use(express.urlencoded({ extended: true }));
//from Postman res getdata  from router folder(Note:use it before express router folder)
app.use(express.json());
//from middleware folder
app.use(cookieParser());
//Express router from router folder
app.use(require("./router/auth"));




//middleware
// const middleware=(req,res,next)=>
// {
//     console.log("Main middle ware");
//     next();
// }
// middleware();

//Express
// app.get("/",(req,res)=>
// {
//     res.send("home page");
// })
// app.get("/about",middleware,(req,res)=>
// {
//     console.log("aboutpage middleware")
//     res.send("about page");
// })
// app.get("/signin",(req,res)=>
// {
//     res.send("signin page");
// })
// app.get("/regsiter",(req,res)=>
// {
//     res.send("register page");
// })
app.listen(port,()=>{console.log(`server running...at ${port}`)});