const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User=require("../models/userModel");
const validator = require("validator");
//register
const register=async(req,res)=>{
    try{
    const {username,email,password,role}=req.body;

    //basic field check
    if (!username || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "username, email ,role & password are required" });
    }
    // Email format check
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Please provide a valid email address" });
    }

    /* 2 Duplication check BEFORE create */
    const existing = await User.findOne({
      $or: [{ username }, { email }]
    }).lean(); // lean = faster, plain JS object

    if (existing) {
      if (existing.username === username)
        return res.status(409).json({ message: "username already exists" });
      if (existing.email === email)
        return res.status(409).json({ message: "email already exists" });
    }

    //Hash and create new user
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser=new User({username,password:hashedPassword,role,email});
    await newUser.save();

    res.status(201).json({message:`User registered with username ${username} and with email ${email}` })
    }
    catch(err){
        console.error(err);
        if (err.code === 11000) {
        const dupField = Object.keys(err.keyValue)[0];
        return res.status(409).json({ message: `${dupField} already exists` });
        }

        if (err.name === "ValidationError") {
          const messages = Object.values(err.errors).map(e => e.message);
          return res.status(400).json({ message: messages.join(", ") });
        }
        res.status(500).json({message:"Something went wrong"})
    }
   

};

//login
const login=async(req,res)=>{
    try{
      const {email,password}=req.body;
      //  Validate required fields
      if (!email || !password) {
        return res.status(400).json({
          message: "username, email, and password are required",
        });
      }
      //validate email
      if (email && !validator.isEmail(email)) {
      return res
        .status(400)
        .json({ message: "please provide a valid email address" });
      }

      //find user by both username and email
      const user = await User.findOne({username,email}).select("+password");
      if(!user){
         
        return res.status(404).json({message:`User with  ${username} not found`})
      }
      //to match with original
      //req body and user object
      const isMatch= await bcrypt.compare(password,user.password);
      if(!isMatch){
        return res.status(400).json({message:"Invalid credentails"})
      }
      //generate jwt token
      const token=jwt.sign({id:user._id,role: user.role},process.env.JWT_SECRET,
        {expiresIn:"1h"}
      );
      res.status(200).json({token});
    }
    
    catch(err){
      console.error(err);
      res.status(500).json({message:"Something went wrong"})
    }
};


module.exports={
    register,login
};