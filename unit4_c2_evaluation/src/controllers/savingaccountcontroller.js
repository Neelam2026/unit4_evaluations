const express=require("express"); 

const SavingsAccount=require("../models/savingaccountmodel");
const router=express.Router();

router.post("",async(req,res)=>{
    try{
    const savingsaccount=await SavingsAccount.create(req.body).lean().exec();
     
    return res.status(200).send( savingsaccount)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})



module.exports=router;