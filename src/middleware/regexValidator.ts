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

const fieldEmptyError = [
  body('name').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(404).send({ error: 'write your name' });
    }
    next();
  },

  body('email').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(404).send({ error: 'write your email' });
    }
    next();
  },

  body('age').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ error: 'write your age' });
    }
    next();
  },

  body('number').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ error: 'write your number' });
    }
    next();
  },

  body('role').notEmpty().withMessage('write your role'),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ error: 'write your role' });
    }
    next();
  },
];

const mailValidator = [
  body('password').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: 'enter your password' });
    }
    next();
  },

  body('secret_question').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: 'enter your sequrity question' });
    }
    next();
  },
];

const loginValidator = [
  body('email').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: 'enter your email' });
    }
    next();
  },
  body('password').notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: 'enter your password' });
    }
    next();
  },
];

export {
  validateEmail,
  validatePassword,
  fieldEmptyError,
  mailValidator,
  loginValidator,
};
