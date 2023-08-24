import express, { Express } from 'express';
import UserRouter from './src/router/userRouter';
import articleRouter from './src/router/articleRouter';
import dbConnection from './src/config/db';
import { port } from './src/config/env';
import commentRouter from './src/router/commentRouter';
import errorHandler from './src/middleware/errorHandler';
import errorLast from './src/middleware/errorLast';

const app: Express = express();

dbConnection();
app.use(express.json());
app.use(express.urlencoded());

app.use('/user', UserRouter);
app.use('/article', articleRouter);
app.use('/comment', commentRouter);
app.use(errorHandler);
app.use(errorLast);

app.listen(port, () => {
  console.log('server active');
});
