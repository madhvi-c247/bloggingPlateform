"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = require("../controller/commentController");
const passport_1 = __importDefault(require("../config/passport"));
const auth_1 = __importDefault(require("../middleware/auth"));
const constant_1 = require("../helper/constant");
const router = (0, express_1.Router)();
router.post('/createComment', passport_1.default.authenticate('jwt', { session: false }), (0, auth_1.default)(constant_1.normalrole), commentController_1.createCommentController);
router.put('/updateComment/:id', commentController_1.updateCommentController);
router.get('/getComment/:id', commentController_1.getCommentController);
router.delete('/deleteComment/:id', commentController_1.deleteCommentController);
exports.default = router;
