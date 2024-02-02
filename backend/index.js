
require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT
app.get('/',(req,res)=>{

    res.send("hello World")
})

app.listen(port,()=>{
    console.log(`example is running on this port ${port}`);
})