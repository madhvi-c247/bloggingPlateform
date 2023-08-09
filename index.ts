import express, { Express,Request,Response } from 'express'
import UserRouter from './src/router/userRouter';
import mongoose from 'mongoose';
import articleRouter from './src/router/articleRouter';

const app:Express=express();
const port:number=3000;


mongoose.connect('mongodb://127.0.0.1:27017/blogging')
.then(()=>console.log('DB connected'))
.catch(()=>console.log('errorin DB'))

app.use(express.json());
app.use(express.urlencoded())

app.use('/user', UserRouter);
app.use('/article', articleRouter);

app.listen(port, () =>{
    console.log("server active")
})
