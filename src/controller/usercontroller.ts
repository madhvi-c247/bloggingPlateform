import { creatUser, updateUser, retrievingUser} from '../services/userService';
import { Request, Response } from 'express';



const createUserController = async (req: Request, res: Response) => {
  const result = await creatUser(req.body);
  // console.log("running");
  // console.log(req.body)
  return res.status(200).send(result)
};

const updateUserController =(req: Request, res: Response) => {
  const result =  updateUser(req.body,req.params.id);
  // console.log('running');
  console.log(req.body);
  return res.status(200).send(result);
}

const retrievingUserController = async (req: Request, res: Response) => {
  const result = await retrievingUser(req.params.id);
  console.log(result);
  return res.status(200).send(result);
};

export { createUserController, updateUserController, retrievingUserController };
