"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usercontroller_1 = require("../controller/usercontroller");
const router = (0, express_1.Router)();
router.post('/createUser', usercontroller_1.createUserController);
router.put('/updateUser/:id', usercontroller_1.updateUserController);
router.get('/retrievingUser', usercontroller_1.retrievingUserController);
exports.default = router;
