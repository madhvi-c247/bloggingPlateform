import { Request, Response } from 'express';

const errorLast = (err: Error, req: Request, res: Response) => {
  res.status(500);
  res.send('Something went wrong!!!');
};
export default errorLast;
