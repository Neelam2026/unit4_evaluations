const express=require("express"); 

const MasterAccount=require("../models/masteraccountmodel");
const router=express.Router();

router.get("",async(req,res)=>{
    try{
    const masteraccount=await MasterAccount.find().populate(userId).lean().exec();
     
    return res.status(200).send( masteraccount)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})



module.exports=router;