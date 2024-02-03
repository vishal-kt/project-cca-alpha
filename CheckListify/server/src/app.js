import 'dotenv/config'
import express from 'express';
import apiRouter from './utils/api.js';


const app = express()

const PORT = process.env.PORT||8000

app.use(express.json)
app.use('/api/',apiRouter);

app.get('/',(req,res)=>{
    res.send("Server Started")
})
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))