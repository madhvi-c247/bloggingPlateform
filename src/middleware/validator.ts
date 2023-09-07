import { body } from 'express-validator';
import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const errorValidator = [
  body('email').notEmpty() && body('password').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: 'please fill data on both the fields ' });
    }
    next();
  },
];
export default errorValidator;
