import { Router } from 'express';
import {
  createCommentController,
  updateCommentController,
  getCommentController,
  deleteCommentController,
} from '../controller/commentController';
import passport from '../config/passport';

import authorization from '../middleware/auth';
import { normalrole } from '../helper/constant';
const router = Router();
router.post(
  '/createComment',
  // passport.authenticate('jwt', { session: false }),
  // authorization(normalrole),
  createCommentController
);

router.put('/updateComment/:id', updateCommentController);

router.get('/getComment', getCommentController);

router.delete('/deleteComment/:id', deleteCommentController);



export default router;
