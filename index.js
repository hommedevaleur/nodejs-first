const express =require("express")
const port = 5000
const app = express()


app.get("/",(req,res)=>{
    //res.json({"message":"bonjour"})
    res.status(200).send("hello andy")
})
const users = require("./routes/users")
app.use("/users",users)

app.listen(port,()=>{
    console.log("server run...")
})