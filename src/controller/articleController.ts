import {
  creatarticle,
  updateArticle,
  retrievingArticle,
  deleteArticle,
  getComment,
} from '../services/articleServices';
import { Request, Response } from 'express';

const createUserArticle = async (req: Request, res: Response) => {
  try {
    const result = await creatarticle(req.params.id, req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateUserArticle = async (req: Request, res: Response) => {
  try {
    const result = await updateArticle(req.body, req.params.id);
    console.log(req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};
const getUserComment = async (req: Request, res: Response) => {
  try {
    const result = await getComment(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};
const retrievingUserArticle = async (req: Request, res: Response) => {
  try {
    const result = await retrievingArticle(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteArticleController = async (req: Request, res: Response) => {
  try {
    const result = await deleteArticle(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export {
  createUserArticle,
  updateUserArticle,
  retrievingUserArticle,
  deleteArticleController,
  getUserComment,
};
