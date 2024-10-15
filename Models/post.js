const mongoose=require("mongoose")
const like=require("./like")
const comment=require("./comment")



const posts=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true

    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'   

        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'like'
        }
    ]
});



module.exports = mongoose.model('post', posts)
