import { Request, Response } from 'express';

const errorLast = (err: Error, req: Request, res: Response) => {
  res.status(500);
  console.log('------------------------', res);
  res.send('Something went wrong!!!');
};
export default errorLast;
