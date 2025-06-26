const mongoose =require("mongoose");
const validator = require("validator");

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        lowercase:true,
        trim:true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
},
   {
    timestamps:true,
   }
);
module.exports=mongoose.model("User",userSchema);