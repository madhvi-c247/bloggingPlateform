import {
  createComment,
  updateComment,
  retrievingComment,
  deleteComment,
} from '../services/commentServices';
import { Request, Response } from 'express';

const createCommentController = async (req: Request, res: Response) => {
  try {
    const result = await createComment(req.body, req.params.id);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateCommentController = async (req: Request, res: Response) => {
  try {
    const result = await updateComment(req.body, req.params.id);
    console.log(req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const retrievingCommentController = async (req: Request, res: Response) => {
  try {
    const result = await retrievingComment(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteCommentController = async (req: Request, res: Response) => {
  try {
    const result = await deleteComment(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export {
  createCommentController,
  updateCommentController,
  retrievingCommentController,
  deleteCommentController,
};
