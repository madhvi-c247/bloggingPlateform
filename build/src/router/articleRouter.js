"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articleController_1 = require("../controller/articleController");
const router = (0, express_1.Router)();
router.post('/createArticle', articleController_1.createUserArticle);
exports.default = router;
