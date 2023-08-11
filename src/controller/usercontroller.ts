import {
  creatUser,
  updateUser,
  retrievingUser,
  deleteUser,
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

const updateUserController = async (req: Request, res: Response) => {
  try {
    const result = await updateUser(req.body, req.params.id);
    console.log(req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const retrievingUserController = async (req: Request, res: Response) => {
  try {
    const result = await retrievingUser(req.params.id);
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
  retrievingUserController,
  deleteUserController,
};
