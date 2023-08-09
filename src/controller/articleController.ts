import { creatarticle,updateArticle} from '../services/articleServices';
import { Request, Response } from 'express';

import mongoose from 'mongoose';
const createUserArticle = async (req: Request, res: Response) => {
  const result = await creatarticle(req.body);
  console.log('running');
  console.log(req.body);
  return res.status(200).send(result);
};

// const updateUserArticle =async (req: Request, res: Response) => {
// let data=await
// console.log(data)
// }

export { createUserArticle };
