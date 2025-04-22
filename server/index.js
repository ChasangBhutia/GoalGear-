const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.get('/',(req,res)=>{
    res.json({message:"Hello I am from Backend",name:"Chasang"})
})


app.listen(3000, ()=>{
    console.log("Server is live");
})