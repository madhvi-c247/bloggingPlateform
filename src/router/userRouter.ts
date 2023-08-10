import { Router } from 'express';
import { createUserController,updateUserController,retrievingUserController } from '../controller/usercontroller';

const router =Router();
router.post('/createUser',createUserController)


router.put('/updateUser/:id', updateUserController);


router.get('/retrievingUser/:id', retrievingUserController);

export default router