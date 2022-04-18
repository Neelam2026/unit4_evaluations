const mongooge=require("mongoose");
const bcrypt = require('bcrypt');


const userSchema=new mongooge.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:false},
        email :{type:String,required:true},
        password:{type:String,required:true},
    },
    {
        timestamps:true,
        versionKey:false,
    },
)

userSchema.pre("save",function(next){
    let hash = bcrypt.hashSync(this.password, 8);
    this.password=hash;
    return next();
})

userSchema.methods.checkPassword=function(){
 return bcrypt.compareSync(password, this.password);   
}



module.exports=mongooge.model("user",userSchema)