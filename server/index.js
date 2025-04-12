const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));



app.listen(3000, ()=>{
    console.log("Server is live");
    
})