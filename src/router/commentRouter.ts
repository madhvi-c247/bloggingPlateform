import { Router } from 'express';
import {
  createCommentController,
  updateCommentController,
  getCommentController,
  deleteCommentController,
} from '../controller/commentController';

const router = Router();
router.post('/createComment', createCommentController);

router.put('/updateComment/:id', updateCommentController);

router.get('/getComment/:id', getCommentController);

router.delete('/deleteComment/:id', deleteCommentController);



export default router;
