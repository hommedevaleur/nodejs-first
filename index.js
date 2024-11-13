//declare express
const express = require("express")
//declare dotenv - utilisation des configuration dotenv
require('dotenv').config();
//declare mysql
const mysql = require("mysql")
//declare port
const port = 5000

//init express on const app
const app = express()

//init connexion
const database= mysql.createConnection({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    database:process.env.DBNAME,
    password:process.env.DBPASSWORD
})

database.connect((err)=>{
    if(err){
        console.error("Erreur"+err.stack)
        return
    }
    console.log("Connexion réussie")
})

app.get("/", (req, res) => {
    //res.json({"message":"bonjour"})
    res.status(200).send("hello andy")
})
const users = require("./routes/users")
app.use("/users", users)

app.listen(port, () => {
    console.log("server run...")
})