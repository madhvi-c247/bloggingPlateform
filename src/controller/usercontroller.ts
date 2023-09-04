import {
  creatUser,
  updateUser,
  getUser,
  deleteUser,
  login,
  getAllUser,
  deleteByMail,
  verifyAndDelete,

} from '../services/userService';
import { Request, Response, NextFunction } from 'express';
import { userreq } from '../interface/Interfaces';
import { log } from 'console';
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
    return res.status(401);
  }
};

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
    const requser: userreq = req.user!;
    const result = await updateUser(requser, req.body, req.params.id);

    return res.status(200).send(result);
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
    const requser: userreq = req.user!;
    const result = await deleteUser(requser, req.params.id);

    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteByMailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const requser: userreq = req.user!
    const result = await deleteByMail(req.user, req.body);

    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const verifyAndDeleteController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const requser: userreq = req.user!;
    const result = await verifyAndDelete(requser);

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
  deleteByMailController,
  verifyAndDeleteController,
};
