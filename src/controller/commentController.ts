import {
  createComment,
  updateComment,
  getComment,
  deleteComment,
} from '../services/commentServices';
import { NextFunction, Request, Response } from 'express';

const createCommentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createComment(req.body);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const updateCommentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateComment(req.body, req.params.id);
    console.log(req.body);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const getCommentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getComment(req.body);

    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteCommentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteComment(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export {
  createCommentController,
  updateCommentController,
  getCommentController,
  deleteCommentController,
};
