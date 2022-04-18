require('dotenv').config();
const { reject } = require('bcrypt/promises');
const { verify } = require('jsonwebtoken');
var jwt = require('jsonwebtoken');

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.SECRECT_KEY,function(err,decoded){
            if(err) return reject(err);
            return resolve(decoded);

        })
    })
}





const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization)
    return res.status(401).send({msg:"token not found"});

    if(!req.headers.authorization.startsWith("Bearer "))
    return res.status(401).send({msg:"token not found"});


    const token =req.headers.authorization.trim().split(" ")[1];

    let decoded;
    try{
decoded=await verifyToken(token)
    }
    catch(err){
        console.log(err);
        return res.status(401).send({msg:"token not found wrong"})
    }
console.log(decoded)
req.userId=decoded.user.__id;
return next()
}

module.exports=authenticate