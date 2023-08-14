import { Router } from 'express';
import {
  createCommentController,
  updateCommentController,
  retrievingCommentController,
  deleteCommentController,
} from '../controller/commentController';

const router = Router();
router.post('/createComment/:id', createCommentController);

router.put('/updateComment/:id', updateCommentController);

router.get('/retrievingComment/:id', retrievingCommentController);

router.delete('/deleteComment/:id', deleteCommentController);



export default router;
