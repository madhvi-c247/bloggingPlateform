import { Router } from 'express';
import {
  createUserArticle,
  updateUserArticle,
  retrievingUserArticle,
  deleteArticleController,
} from '../controller/articleController';

const router = Router();
router.post('/createArticle', createUserArticle);

router.put('/updateArticle/:id', updateUserArticle);

router.get('/retrievingArticle/:id', retrievingUserArticle);

router.delete('/deleteArticle/:id', deleteArticleController);
export default router;