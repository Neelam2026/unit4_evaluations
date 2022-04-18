const path=require("path");
const multer=require("multer")

const req= require("express/lib/request")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../myuploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })


  function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    if(file.mimetype=="image/jpeg" || file.mimetype=="image/png" ){
        cb(null, true)
    }
  
    // To accept the file pass `true`, like so:

  else{
    cb(new Error('I don\'t have a clue!'))
  }
    // You can always pass an error if something goes wrong:
    
  
  }
  
  const upload = multer({ storage: storage })


  module.exports=upload