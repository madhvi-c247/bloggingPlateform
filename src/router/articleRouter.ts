import { Router } from 'express';
import {
  createUserArticle,
  updateUserArticle,
  getUserArticle,
  deleteArticleController,
  getCategoryController,
  getAllArticleController,
} from '../controller/articleController';
import multer from 'multer';
import passport from '../config/passport';

import authorization from '../middleware/auth';
import { normalrole } from '../helper/constant';

// let upload = multer({ dest: 'uploads/' });

const router = Router();
router.post('/createArticle/:id', createUserArticle);

router.put(
  '/updateArticle/:id',
  passport.authenticate('jwt', { session: false }),
  authorization(normalrole),
  updateUserArticle
);

router.get('/getArticle/:id', getUserArticle);

router.delete(
  '/deleteArticle/:id',
  passport.authenticate('jwt', { session: false }),
  authorization(normalrole),
  deleteArticleController
);

router.get('/getAllArticle', getAllArticleController);

router.get('/getCategoryArticle', getCategoryController);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
router.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file);
});


export default router;