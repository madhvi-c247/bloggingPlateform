import { Router } from 'express';
import {
  createUserArticle,
  updateUserArticle,
  getUserArticle,
  deleteArticleController,
  getCategoryController,
  getAllArticleController,
} from '../controller/articleController';


const router = Router();
router.post('/createArticle/:id', createUserArticle);

router.put('/updateArticle/:id', updateUserArticle);

router.get('/getArticle/:id', getUserArticle);

router.delete('/deleteArticle/:id', deleteArticleController);

router.get('/getAllArticle', getAllArticleController);

router.get('/getCategoryArticle', getCategoryController);
export default router;