const express=require("express")
const router=express.Router();
const {getData,createPost,createComment,createLike,deletePost,deleteComment}=require("../Controller/controller")

router.get("/getData",getData)
router.post("/createPost",createPost)
router.post("/createComment",createComment)
router.post("/createLike",createLike)
router.delete("/deletePost",deletePost)
router.delete("/deleteComment",deleteComment)
module.exports=router 