import {
  creatUser,
  updateUser,
  getUser,
  deleteUser,
  login,
  getAllUser,
} from '../services/userService';
import { Request, Response } from 'express';

const createUserController = async (req: Request, res: Response) => {
  try {
    const result = await creatUser(req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const loginController = async (req: Request, res: Response) => {
  return await login(req, res);
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const result = await updateUser(req.body, req.params.id);
    console.log(req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getUserController = async (req: Request, res: Response) => {
  try {
    const result = await getUser(req.body);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getAllUserController = async (req: Request, res: Response) => {
  try {
    const result = await getAllUser();
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const result = await deleteUser(req.params.id);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
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
