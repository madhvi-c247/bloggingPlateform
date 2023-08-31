import dotenv from 'dotenv';
dotenv.config();
export const DB_URL = process.env.DB_URL ?? '';
export const DB_URL_TESTING = process.env.DB_URL_TESTING ?? '';
export const port = process.env.port;
export const key = 'ZXCVBNM';