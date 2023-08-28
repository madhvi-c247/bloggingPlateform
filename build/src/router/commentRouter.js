"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controller/index");
const passport_1 = __importDefault(require("../config/passport"));
const auth_1 = __importDefault(require("../middleware/auth"));
const constant_1 = require("../helper/constant");
const router = (0, express_1.Router)();
router.post('/createComment', passport_1.default.authenticate('jwt', { session: false }), index_1.createCommentController);
router.put('/updateComment', passport_1.default.authenticate('jwt', { session: false }), (0, auth_1.default)(constant_1.normalrole), index_1.updateCommentController);
router.get('/getComment', index_1.getCommentController);
router.delete('/deleteComment', passport_1.default.authenticate('jwt', { session: false }), (0, auth_1.default)(constant_1.normalrole), index_1.deleteCommentController);
exports.default = router;
