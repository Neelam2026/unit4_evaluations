const express= require("express");
const app=express();
const usercont=require("./controller/user.controller")
const commcont=require("./controller/comment.controller")
const publcont=require("./controller/publication.controller")
const bookcont=require("./controller/book.controller")
app.use(express.json());
 app.use("/user",usercont);
 app.use("/comment",commcont)
 app.use("/publication", publcont)
 app.use("/book",bookcont)


module.exports=app;
