import express from 'express';

const app = express();

app.get('/',(req,res)=>{

    res.send('server is ready ')
})

const port = process.env.PORT 

app.listen(port,()=>{
    console.log(*);
})
