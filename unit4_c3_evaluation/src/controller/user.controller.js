const express=require("experss");
const {body, validationResult}=require("express-validator");
const User= require("../models/user.model");
const upload=require("../middileware/upload")
const router=express.Router();

 router.post("/", upload.single("profileImages"),
 body("firstName").trim().not().isEmpty().bail().withMessage("fill name").isLength({min:3,max:30}).withMessage("invalid name"),
 body("lastName").trim().not().isEmpty().bail().withMessage("fill lastname").isLength({min:3,max:30}).withMessage("invalid lastname"),
 body("age").trim().not().isEmpty().bail().withMessage("fill age").isNumeric().custom((val)=>{
     if(val<1|| val>150){
         throw new Error("incorrect age")
     }
     return true;
 }),
 async (req,res)=>{
     try{
const errors=validationResult(req);
if(!errors.isEmpty){
    return res.status(400).send({errors:errors.array()})
}
const user=await User.create({
    profileImages:req.file.path});
return res.status(200).send(user)
     }
     catch(err){
         return res.send(err.message)
     }
 }
 
 )


module.exports=router;