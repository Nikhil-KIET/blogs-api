
const express=require("express")
const dbConnect=require("./Config/dbConnect");

const app =express();

require("dotenv").config()

app.use(express.json());

const router=require("./Routes/router")



app.use("/api/v1",router)

app.get("/",(req,res)=>{
    res.send("Welcome to  Blogs API")
})
            
app.listen(process.env.PORT,()=>{
    console.log("server stared sucessfully");
})


dbConnect();
