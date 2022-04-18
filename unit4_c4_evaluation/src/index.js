const express=require("express");
const app=express()

const {register,login}=require("./controller/auth.controller")
const usercontroller=require("./controller/user.controller")
const todocontroller=require("./controller/todo.controller")
app.use(express.json());
app.use("/users",usercontroller)
app.use("/todos",todocontroller)

app.post("/register",register)
app.post("/login",login)
module.exports=app;