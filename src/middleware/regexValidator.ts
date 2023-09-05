import { body } from 'express-validator';
import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

// email Validator-------------------------------
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const validateEmail = [
  body('email').notEmpty().matches(emailRegex),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: 'email is not correct' });
    }
    next();
  },
];

//Password Validator----------------------------
const passwordRegex =
  /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16})$/;
const validatePassword = [
  body('password').notEmpty().matches(passwordRegex),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: 'password is not correct' });
    }
    next();
  },
];
export { validateEmail, validatePassword };
