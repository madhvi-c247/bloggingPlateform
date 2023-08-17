import { Router } from 'express';
import {
  createUserArticle,
  updateUserArticle,
  retrievingUserArticle,
  deleteArticleController,
  retrievingCategoryController,
  getAllArticleController,
} from '../controller/articleController';

const router = Router();
router.post('/createArticle/:id', createUserArticle);

router.put('/updateArticle/:id', updateUserArticle);

router.get('/retrievingArticle/:id', retrievingUserArticle);

router.delete('/deleteArticle/:id', deleteArticleController);

router.get('/getAllArticle', getAllArticleController);

router.get('/retrievingCategoryArticle', retrievingCategoryController);
export default router;