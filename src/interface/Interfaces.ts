import * as core from 'express';

interface articleInterface {
  // id:String
  title: string;
  article: string;
  author: object;
  date: Date;
  categories: string;
}

interface commentInterface {
  articleId: object;
  userId: object;
  comment: string;
  date: Date;
}

interface loginInterface {
  email: string;
  password: string;
}

interface userInterface {
  name: string;
  email: string;
  password: string;
  age: number;
  number: number;
  role: string;
  validatePassword(candidatePassword: string, user: string): boolean;
}

interface queryInterface {
  search: string;
  page: string;
  limit: string;
}

interface filterInterface {
  $or?: { [x: string]: { $regex: string; $options: string } }[];
}

export {
  articleInterface,
  commentInterface,
  loginInterface,
  userInterface,
  queryInterface,
  filterInterface,
  // query,
};
