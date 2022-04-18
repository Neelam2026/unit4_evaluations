const mongoose= require("mongoose");

const masterAccountSchema =new mongoose.Schema({
balance:{type:String,required:true},
userId:{ type:mongoose.Schema.Types.ObjectId,ref:"user",required :true},},
{
 timestamps:true   
}  
);

const MasterAccount=mongoose.model("masteraccount" , masterAccountSchema);
module.exports= MasterAccount;

