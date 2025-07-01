const express= require("express");
require("dotenv").config();
const cors = require('cors');
//const dotenv=require("dotenv").config();
const dbConnect=require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes");

dbConnect();
 
const app=express();

//middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

//routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

//start the server
 const PORT = process.env.PORT|| 7002;
 app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
 });