  const connect=require("./configs/db")
  const app=require("./index");


  app.listen(5000, async(req,res)=>{
      try{
        await connect()
      }
      catch(err){
          console.log(err)
      }
      console.log("listening port 5000")
  })