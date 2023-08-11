import { Router } from 'express';
import {
  createUserController,
  updateUserController,
  retrievingUserController,
  deleteUserController,
} from '../controller/usercontroller';

const router = Router();
router.post('/createUser', createUserController);

router.put('/updateUser/:id', updateUserController);

router.get('/retrievingUser/:id', retrievingUserController);

router.delete('/deleteUser/:id', deleteUserController);

export default router
