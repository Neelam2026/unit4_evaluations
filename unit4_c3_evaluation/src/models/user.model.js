const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:false},
        age :{type:Number,required:true},
        email:{type:String,required:true,unique:true},
        profileImages:[{type:String,required:true}],
        bookid:{type:mongoose.Schema.Types.ObjectId ,ref:"book" ,required:true},
        publicationid:{type:mongoose.Schema.Types.ObjectId ,ref:"publication" ,required:true}
    },
    {
    timestamps:{type:String,required:true},
    versionKey:false,
    }
    );

    module.exports=mongoose.model("user",userSchema)