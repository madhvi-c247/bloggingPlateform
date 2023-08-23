import { body } from 'express-validator';
import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const errorValidator = [
  body('email').notEmpty() && body('password').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result['errors'][0] });
    }
    next();
  },
];
export default errorValidator;
