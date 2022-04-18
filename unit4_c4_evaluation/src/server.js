const connect=require("./configs/db");
const app=require("./index");

app.listen(5000,async()=>{
    try{
     await connect()
    }
    catch(err){
        console.error(err)
    }
    console.error("listening on port 5000")
})