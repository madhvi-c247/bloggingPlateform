import { Router } from 'express';
import {
  createUserController,
  updateUserController,
  getUserController,
  deleteUserController,
  loginController,
  getAllUserController,
} from '../controller/usercontroller';
import errorValidator from '../middleware/validator';

import passport from '../config/passport';

import authorization from '../middleware/auth';
import { adminrole } from '../helper/constant';



const router = Router();
router.post('/createUser', createUserController);

router.put('/updateUser/:id', updateUserController);

router.get(
  '/getAllUser',
  passport.authenticate('jwt', { session: false }),
  authorization(adminrole),
  getAllUserController
);

router.get(
  '/getUser',
  passport.authenticate('jwt', { session: false }),
  getUserController
);

router.post('/login', errorValidator, loginController);

router.delete(
  '/deleteUser/:id',
  passport.authenticate('jwt', { session: false }),
  deleteUserController
);




export default router
