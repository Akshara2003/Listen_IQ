const express= require("express");
const dotenv=require("dotenv").config();
const dbConnect=require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes");

const cors=require("cors")

dbConnect();
 
const app=express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
//middleware
app.use(express.json());

//routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

//start the server
 const PORT = process.env.PORT|| 7002;
 app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
 });