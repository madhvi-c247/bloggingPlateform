import { Request, Response, NextFunction } from 'express';

const errorLast = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500);
  res.send('Something went wrong!!!');
  next();
};
export default errorLast;
