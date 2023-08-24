"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = require("../controller/commentController");
const router = (0, express_1.Router)();
router.post('/createComment', 
// passport.authenticate('jwt', { session: false }),
// authorization(normalrole),
commentController_1.createCommentController);
router.put('/updateComment/:id', commentController_1.updateCommentController);
router.get('/getComment', commentController_1.getCommentController);
router.delete('/deleteComment/:id', commentController_1.deleteCommentController);
exports.default = router;
