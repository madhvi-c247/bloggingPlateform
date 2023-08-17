import { log } from 'console';
import { Request, Response, NextFunction } from 'express';

const authorization = (role: string) => {
  console.log(role);
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    console.log('authorization', user);
    if (user.role === role) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
};
export default authorization;
