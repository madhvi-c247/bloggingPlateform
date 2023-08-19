import { body } from 'express-validator';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

const error = [
  body('email').notEmpty() && body('password').notEmpty(),
  async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result['errors'][0] });
    }
  },
];
export default error;
