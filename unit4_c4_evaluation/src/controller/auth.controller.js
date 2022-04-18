const User=require("../model/user.model")
var jwt = require('jsonwebtoken');
require('dotenv').config();


const generateToken=(user)=>{
    return jwt.sign({user}, process.env.SECRECT_KEY)

}



const register=async(req,res)=>{
    try{
        
     let user=await User.findOne({email:req.body.email})
     if(user){
        return  res.status(400).send("email already registerd")  
     }
     user=auwait .create(req.body);
     const token=generateToken(user)
     return  res.status(200).send({user,token})
         }
         catch(err){
             return  res.status(401).send({message: err.message})
         }  
}


const login=async(req,res)=>{
    try{
        
     let user=await User.findOne({email:req.body.email})
     if(!user){
        return  res.status(400).send("email wrong")  
     }
     const match=user.cheeckPasswor(req.body.password)
     if(!match){
        return  res.status(400).send("email/ pass wrong")  
     }


     const token = generateToken(user)
     return  res.status(200).send({user,token})
         }
         catch(err){
             return  res.status(401).send({message: err.message})
         }  
}


module.exports={register,login}