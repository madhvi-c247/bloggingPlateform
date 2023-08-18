import {
  creatarticle,
  updateArticle,
  getArticle,
  deleteArticle,
  getByCategory,
  getAllArticle,
} from '../services/articleServices';
import { NextFunction, Request, Response } from 'express';

const createUserArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await creatarticle(req.params.id, req.body);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const updateUserArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateArticle(req.body, req.params.id);
    console.log(req.body);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const getAllArticleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllArticle();
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const getUserArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getArticle(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
const getCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getByCategory(req.body.categories);
    console.log(result);
    // console.log(req.params.categories);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteArticleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteArticle(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export {
  createUserArticle,
  updateUserArticle,
  getUserArticle,
  deleteArticleController,
  getCategoryController,
  getAllArticleController,
};
