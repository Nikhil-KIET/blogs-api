const mongoose =require("mongoose");

require("dotenv").config();

 function dbConnect(){
    try{
        mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>{
        console.log("Connected to MongoDB")
        }
        )
    }catch{
        console.log("Error connecting to MongoDB");
    }
}

module.exports=dbConnect

