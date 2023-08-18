import { body } from 'express-validator';
import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const error = async (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  if (body('email').notEmpty() && body('password').notEmpty()) {
    console.log('error');
  } else if (!result.isEmpty()) {
    return res.send({ errors: result['errors'][0] });
  }
};
export default error;
