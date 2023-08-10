import express, { Express,Request,Response } from 'express'
import UserRouter from './src/router/userRouter';
import mongoose from 'mongoose';
import articleRouter from './src/router/articleRouter';
import { DB_URL } from './src/config/env';
import port from './src/config/db';
const app: Express = express();

mongoose
  .connect(DB_URL)
  .then(() => console.log('DB connected'))
  .catch(() => console.log('errorin DB'));
app.use(express.json());
app.use(express.urlencoded())

app.use('/user', UserRouter);
app.use('/article', articleRouter);

app.listen(port, () =>{
    console.log("server active")
})
