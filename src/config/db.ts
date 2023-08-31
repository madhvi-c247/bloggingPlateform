import mongoose from 'mongoose';
import { DB_URL, DB_URL_TESTING } from './env';
import dotenv from 'dotenv';
dotenv.config();
export const NODE_ENV = process.env.NODE_ENV ?? '';
export function dbConnection() {
  if(NODE_ENV=="dev")
 { 
  mongoose
    .connect(DB_URL)
    .then(() => console.log('DB connected at', { DB_URL }))
    .catch(() => console.log('errorin DB'));
  }
};

export function dummyConnection() {
  if(NODE_ENV=="testing")
  {
    mongoose
    .connect('mongodb://127.0.0.1:27017/testing')
    .then(() => console.log('DB connected  dummyConnection'))
    .catch((err) => console.log('errorin fake DB', err));
  }
};
