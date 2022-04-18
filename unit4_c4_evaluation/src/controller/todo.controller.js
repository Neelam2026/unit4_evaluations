const express=require("express");
const authenticate=require("../middleware/authenticate")
const router=express.Router();
const Todo=require("../model/todo.model");
const authorise=require("../middleware/authenticate")
router.post("",authenticate,async(req, res)=>{
    try{
   const todo=await Todo.create(req.body)
   return  res.status(201).send(todo)
    }
    catch(err){
        return  res.status(401).send({message: err.message})
    }
})


router.get("",async(req, res)=>{
    try{
   const todo=await Todo.find().populate("userId");

   return  res.status(200).send(todo)
    }
    catch(err){
        return  res.status(401).send({message: err.message})
    }
})




router.get("/:id",authenticate,authorise(["admin","seller","customer"]),async(req, res)=>{
    try{
   const todo=await Todo.findById(req.params.id).populate("userId");
   
   return  res.status(200).send(todo)
    }
    catch(err){
        return  res.status(401).send({message: err.message})
    }
})


router.patch("/:id",authenticate,authorise(["admin","seller"]),async(req, res)=>{
    try{
   const todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate("userId");
   
   return  res.status(200).send(todo)
    }
    catch(err){
        return  res.status(401).send({message: err.message})
    }
})



router.delete("/:id",authenticate,authorise(["admin","seller"]),async(req, res)=>{
    try{
   const todo=await Todo.findByIdAndDelete(req.params.id).populate("userId");
   
   return  res.status(200).send(todo)
    }
    catch(err){
        return  res.status(401).send({message: err.message})
    }
})





module.exports=router;