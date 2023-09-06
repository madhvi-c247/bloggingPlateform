import { Request, Response, NextFunction } from 'express';

const errorLast = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(401);
  res.send('Something went wrong!!!');
  res.send(err.message);
  next();
};
export default errorLast;
