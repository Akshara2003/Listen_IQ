const express= require("express");
require("dotenv").config();
const cors = require('cors');
//const dotenv=require("dotenv").config();
const dbConnect=require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes");
const contentRoutes=require('./routes/contentRoutes');
const dashboardRoutes=require('./routes/dashboardRoutes');
const partnerRoutes=require('./routes/partnerRoutes');
dbConnect();
 
const app=express();

//middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

//routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/partners', partnerRoutes);
//app.use('/api/dashboard', require('./routes/dashboardRoutes'));
//app.use('/api/partners',  require('./routes/partnerRoutes'));
//app.use('/api/content',   require('./routes/contentRoutes'));
//app.use('/api/reports',   require('./routes/reportRoutes'));

//start the server
 const PORT = process.env.PORT|| 7002;
 app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
 });