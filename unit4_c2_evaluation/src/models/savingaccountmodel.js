const mongoose= require("mongoose");

const savingsAccountSchema =new mongoose.Schema({
account_number :{type:Number,required:true,unique:true},
balance :{type:String,required:true},
interestRate:{type:String,required:true},


},
{
 timestamps:true   
}  
);


module.exports=SavingsAccount;const SavingsAccount=mongoose.model("savingsaccount" ,savingsAccountSchema);

