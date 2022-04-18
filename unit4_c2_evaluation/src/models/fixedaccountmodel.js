const mongoose= require("mongoose");

const fixedAccountSchema =new mongoose.Schema({
account_number:{type:Number,required:true,unique:true},
balance:{type:String,required:true},
interestRate :{type:String,required:true},
startDate :{type:String,required:true},
maturityDate:{type:String,required:true},
},
{
 timestamps:true   
}  
);

const FixedAccount=mongoose.model("fixedaccount" ,fixedAccountSchema);
module.exports=FixedAccount;

