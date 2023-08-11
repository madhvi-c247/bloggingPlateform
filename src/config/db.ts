import mongoose from 'mongoose';
import { DB_URL } from './env';
// const port: number = 3000;
// export default port;

export default () => {
  mongoose
    .connect(DB_URL)
    .then(() => console.log('DB connected at', { DB_URL }))
    .catch(() => console.log('errorin DB'));
};
