import { Router } from 'express';
import {
  createCommentController,
  updateCommentController,
  getCommentController,
  deleteCommentController,
  // getCommentidController,
} from '../controller/index';
import passport from '../config/passport';

import authorization from '../middleware/auth';
import { normalrole } from '../helper/constant';
const router = Router();
router.post(
  '/createComment',
  passport.authenticate('jwt', { session: false }),
  authorization(normalrole),
  createCommentController
);

router.put(
  '/updateComment',
  passport.authenticate('jwt', { session: false }),
  authorization(normalrole),
  updateCommentController
);

router.get('/getComment', getCommentController);

// router.get('/getCommentid/:id', getCommentidController);

router.delete(
  '/deleteComment',
  passport.authenticate('jwt', { session: false }),
  authorization(normalrole),
  deleteCommentController
);



export default router;
