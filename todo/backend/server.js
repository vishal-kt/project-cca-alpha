import 'dotenv/config'
import express from 'express';

const app = express();

const PORT =process.env.PORT||3000;

app.get('/',(req,res)=>{

    res.send('server is ready')
})
app.listen(PORT,()=>{
    console.log(`PORT is running on ${PORT}`);
})
