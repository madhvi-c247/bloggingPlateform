"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articleController_1 = require("../controller/articleController");
const multer_1 = __importDefault(require("multer"));
const passport_1 = __importDefault(require("../config/passport"));
const auth_1 = __importDefault(require("../middleware/auth"));
const constant_1 = require("../helper/constant");
// let upload = multer({ dest: 'uploads/' });
const router = (0, express_1.Router)();
router.post('/createArticle/:id', articleController_1.createUserArticle);
router.put('/updateArticle/:id', passport_1.default.authenticate('jwt', { session: false }), (0, auth_1.default)(constant_1.normalrole), articleController_1.updateUserArticle);
router.get('/getArticle/:id', articleController_1.getUserArticle);
router.delete('/deleteArticle/:id', passport_1.default.authenticate('jwt', { session: false }), (0, auth_1.default)(constant_1.normalrole), articleController_1.deleteArticleController);
router.get('/getAllArticle', articleController_1.getAllArticleController);
router.get('/getCategoryArticle', articleController_1.getCategoryController);
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
router.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.file);
});
exports.default = router;
