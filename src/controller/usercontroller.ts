import {
  creatUser,
  updateUser,
  getUser,
  deleteUser,
  login,
  getAllUser,
} from '../services/userService';
import { Request, Response, NextFunction } from 'express';

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await creatUser(req.body);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(login);
    return await login(req, res);
  } catch (error) {
    next(error);
  }
};

const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateUser(req.user, req.body, req.params.id);

    return res.status(200).send('update user');
  } catch (error) {
    next(error);
  }
};

const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getUser(req.body);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const getAllUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllUser(req.body);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteUser(req.user, req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export {
  createUserController,
  updateUserController,
  getUserController,
  deleteUserController,
  loginController,
  getAllUserController,
};
