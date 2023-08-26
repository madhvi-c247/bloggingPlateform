import express, { Express } from 'express';
import { commentRouter,UserRouter,articleRouter } from './src/router/index';
import dbConnection from './src/config/db';
import { port } from './src/config/env';
import { errorHandler,errorLast } from './src/middleware/index';
import ejs from 'ejs';

const app: Express = express();

// app.set('view engine', 'ejs');

// app.get('/home', (req, res) => {
//   let animals = [{ name: 'Alligator' }, { name: 'Crocodile' }];
//   res.render('home', { animals: animals });
// });
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
