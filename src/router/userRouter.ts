import { Router } from 'express';
import {
  createUserController,
  updateUserController,
  retrievingUserController,
  deleteUserController,
  loginController,
} from '../controller/usercontroller';

import passport from '../config/passport';
import { session } from 'passport';

const router = Router();
router.post('/createUser', createUserController);

router.put('/updateUser/:id', updateUserController);

router.get(
  '/retrievingUser',
  passport.authenticate('jwt', { session: false }),
  retrievingUserController
);

router.post('/login', loginController);

router.delete('/deleteUser/:id', deleteUserController);

export default router
