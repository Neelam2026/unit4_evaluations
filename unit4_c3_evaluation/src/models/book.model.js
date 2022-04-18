const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema(
    {
        likes:{type:Number,default:"0"},
        content:{type:String,required:true},
        coverImage:[{type:String,required:true}],
    },
    {
    timestamps:{type:String,required:true},
    versionKey:false,
    }
    );


    module.exports=mongoose.model("book",bookSchema)