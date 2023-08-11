import express, { Express,Request,Response } from 'express'
import UserRouter from './src/router/userRouter';
import articleRouter from './src/router/articleRouter';
import dbConnection from './src/config/db';
import { port } from './src/config/env';
import commentRouter from './src/router/commentRouter';

const app: Express = express();

dbConnection();
app.use(express.json());
app.use(express.urlencoded());

app.use('/user', UserRouter);
app.use('/article', articleRouter);
app.use('/comment', commentRouter);

app.listen(port, () =>{
    console.log("server active")
})
