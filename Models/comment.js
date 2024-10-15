const mongoose=require("mongoose")



const comment=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    


})

module.exports=mongoose.model("comment",comment)