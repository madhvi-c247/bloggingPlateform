import { Router } from 'express';
import {
  createUserController,
  updateUserController,
  getUserController,
  deleteUserController,
  loginController,
  getAllUserController,
} from '../controller/usercontroller';
import error from '../middleware/validator';
import { body } from 'express-validator';
import passport from '../config/passport';

import authorization from '../middleware/auth';

const router = Router();
router.post('/createUser', createUserController);

router.put('/updateUser/:id', updateUserController);

router.get(
  '/getAllUser',
  passport.authenticate('jwt', { session: false }),
  authorization('admin'),
  getAllUserController
);

router.get(
  '/getUser',
  passport.authenticate('jwt', { session: false }),
  getUserController
);

router.post(
  '/login',
  body('email').notEmpty(),
  body('password').notEmpty(),
  loginController
);

router.delete(
  '/deleteUser/:id',
  passport.authenticate('jwt', { session: false }),
  authorization('admin'),
  deleteUserController
);

export default router
