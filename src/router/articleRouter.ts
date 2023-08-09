import { Router } from 'express';
import { createUserArticle } from '../controller/articleController';

const router = Router();
router.post('/createArticle', createUserArticle);
export default router;