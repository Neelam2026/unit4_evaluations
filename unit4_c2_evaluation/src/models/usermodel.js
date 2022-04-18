const mongoose= require("mongoose");

const userSchema =new mongoose.Schema({
firstName:{type:String,required:true},
middleName :{type:String},
lastName :{type:String,required:true},
age :{type:String,required:true},
email :{type:String,required:true},
address:{type:String,required:true},
gender: {type:String, default:"female"},
type :{type:String,default:"customer"},
},
{
 timestamps:true ,  
}  
);

const User=mongoose.model("user" , userSchema);
module.exports=User;

