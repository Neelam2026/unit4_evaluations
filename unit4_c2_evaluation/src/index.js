const express=require("express")
const app= express()

const fixedcontroller=require("./controllers/fixedaccountcontroller");

const mastercontroller=require("./controllers/masteraccountcontroller")

const savingcontroller=require("./controllers/savingaccountcontroller")


app.use(express.json());

app.use("/masteraccount", mastercontroller);
app.use("/savingsaccount", savingcontroller);
app.use("/fixedaccount",fixedcontroller)
module.exports=app;
