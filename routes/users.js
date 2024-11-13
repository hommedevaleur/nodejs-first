const express = require("express")
const router = express.Router()
require('dotenv').config();
//declare mysql
const mysql = require("mysql")
//init connexion
const database= mysql.createConnection({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    database:process.env.DBNAME,
    password:process.env.DBPASSWORD
})
router.get("/",(req,res)=>{
    database.query("SELECT * FROM user",(err,row,field)=>{
        if(err) throw err;
        res.json(row)
    })
})

module.exports = router
