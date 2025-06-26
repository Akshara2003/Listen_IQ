const express = require("express");
const router=express.Router();
const verifyToken=require("../middlewares/authMiddleware");
const authorizeRoles=require("../middlewares/roleMiddleware")

//only admin can access this router
router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res)=>{
    res.json({message:"Welcome Admin"});
})

//only user can access this router
router.get("/user",verifyToken, authorizeRoles("admin","user"),(req,res)=>{
    res.json({message:"Welcome User"});
})
module.exports=router;