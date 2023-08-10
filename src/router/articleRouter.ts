import { Router } from 'express';
import {
  createUserArticle,
  updateUserArticle,
  retrievingUserArticle,
} from '../controller/articleController';

const router = Router();
router.post('/createArticle', createUserArticle);

router.put('/updateArticle/:id', updateUserArticle);

router.get('/retrievingArticle/:id', retrievingUserArticle);

export default router;