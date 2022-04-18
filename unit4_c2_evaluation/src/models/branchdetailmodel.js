const mongoose= require("mongoose");

const branchDetailsSchema =new mongoose.Schema({
name:{type:String,required:true},
address:{type:String,required:true},
IFSC :{type:String,required:true},
MICR:{type:Number,required:true},

},
{
 timestamps:true   
}  
);

const BranchDetails=mongoose.model("branchdetails" , branchSchema);
module.exports=BranchDetails;

