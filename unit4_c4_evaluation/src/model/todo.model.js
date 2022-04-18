const mongooge=require("mongoose");
const todoSchema=new mongooge.Schema(
    {
        title:{type:String,required:true},
        userId:{type: mongooge.Schema.Types.ObjectId, ref:"user",required:true}
       
    },
    {
        timestamps:true,
        versionKey:false,
    },


)
module.exports=mongooge.model("todo",todoSchema)