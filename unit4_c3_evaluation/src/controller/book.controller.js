const express=require("experss");
const {body, validationResult}=require("express-validator");
const User= require("../models/book.model");

const router=express.Router();
router.post("",async (req,res)=>{
    try{

const data=await User.create(req.body
   );
return res.status(200).send(data)
    }
    catch(err){
        return res.send(err.message)
    }
})


module.exports=router;