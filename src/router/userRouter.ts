import { Router } from 'express';
import {
  createUserController,
  updateUserController,
  getUserController,
  deleteUserController,
  loginController,
  getAllUserController,
  deleteByMailController,
  verifyAndDeleteController,

} from '../controller/index';
// import errorValidator from '../middleware/validator';
import passport from '../config/passport';
import {
  validateEmail,
  validatePassword,
  fieldEmptyError,
  mailValidator,
  loginValidator,
} from '../middleware/regexValidator';
import authorization from '../middleware/auth';
import { adminrole } from '../helper/constant';

const router = Router();
router.post(
  '/createUser',
  validateEmail,
  validatePassword,
  fieldEmptyError,
  createUserController
);

router.put(
  '/updateUser/:id',
  passport.authenticate('jwt', { session: false }),
  updateUserController
);

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

router.post('/login', loginValidator, loginController);

router.delete(
  '/deleteUser/:id',
  passport.authenticate('jwt', { session: false }),
  deleteUserController
);

router.post(
  '/deletebyMail',
  passport.authenticate('jwt', { session: false }),
  mailValidator,
  deleteByMailController
);

router.get(
  '/verifyAndDeleteAccount',
  passport.authenticate('jwt', { session: false }),
  verifyAndDeleteController
);


export default router
