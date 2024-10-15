
const gpost = require("../Models/post")
const comment = require("../Models/comment")
const like = require("../Models/like")


function getData(req, res) {
    try {
        res.status(200).send("Route working sucessfully")
    } catch {
        res.status(500).send("Internal server error")
    }
}

async function createPost(req, res) {
    try {
        const { title, desc } = req.body
       // const post = new post({ title, desc })
     let data=await gpost.create({title,desc})
        res.status(200).send("Post created successfully")
    } catch {
        res.status(500).send("Internal server error")
    }
}

async function deletePost(req, res) {
    try {
        const { id } = req.body
       // const post = new post({ title, desc })
     let data=await gpost.findByIdAndDelete(id)
     await comment.deleteMany({id:id});
     await like.deleteMany({id:id});

        res.status(200).send("Post created successfully")
    } catch {
        res.status(500).send("Internal server error")
    }
}

async function createComment(req, res) {
    try {
        const { user, id } = req.body
       // const post = new post({ title, desc })
     let data=await comment.create({user,id})

    let da= await gpost.findByIdAndUpdate(id,{$push:{comments:data._id}},{new:true}).populate("comments").exec()

        res.status(200).json({data:da,
        message: "Comment created successfully"})
    } catch {
        res.status(500).send("Internal server error")
    }
}

async function deleteComment(req, res) {
    try {
        const { id } = req.body
       // const post = new post({ title, desc })
     let data=await comment.findByIdAndDelete({_id:id})

    let da= await gpost.findByIdAndUpdate(data.id,{$pull:{comments:data._id}},{new:true}).populate("comments").exec()

        res.status(200).json({data:da,
        message: "Comment created successfully"})
    } catch {
        res.status(500).send("Internal server error")
    }
}

async function createLike(req, res) {
    try {
        const { user, id } = req.body
       // let data=await like.create({user,id})
       let liked=new like({user,id})
       
     let data=await liked.save()

    let da= gpost.findByIdAndUpdate(id,{$push:{likes:data._id}},{new:true}).populate("likes").exec()

        res.status(200).json({data:data,
        message: "Comment created successfully"})
    } catch {
        res.status(500).send("Internal server error")
    }
}

module.exports = { getData, createPost,createComment,createLike,deletePost,deleteComment }