import { Request, Response, NextFunction } from 'express';
import { userInterface } from '../interface/Interfaces';

const authorization = (role: string) => {
  console.log(role);
  return (req: Request, res: Response, next: NextFunction) => {
    const user: userInterface | undefined = req.user as userInterface;

    console.log('authorization', user);
    if (user.role === role) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
};
export default authorization;
