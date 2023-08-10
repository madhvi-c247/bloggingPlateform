import {
  creatarticle,
  updateArticle,
  retrievingArticle,
} from '../services/articleServices';
import { Request, Response } from 'express';

const createUserArticle = async (req: Request, res: Response) => {
  const result = await creatarticle(req.body);

  return res.status(200).send(result);
};

const updateUserArticle = async (req: Request, res: Response) => {
  const result = await updateArticle(req.body, req.params.id);
  console.log(req.body);
  return res.status(200).send(result);
};

const retrievingUserArticle = async (req: Request, res: Response) => {
  const result = await retrievingArticle(req.params.id);
  console.log(result);
  return res.status(200).send(result);
};

export { createUserArticle, updateUserArticle, retrievingUserArticle };
