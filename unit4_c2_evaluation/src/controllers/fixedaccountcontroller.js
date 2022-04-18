const express=require("express"); 

const FixedAccount=require("../models/fixedaccountmodel");
const router=express.Router();

router.post("",async(req,res)=>{
    try{
    const fixedaccount=await FixedAccount.create(req.body).lean().exec();
     
    return res.status(200).send( fixedaccount)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})



module.exports=router;