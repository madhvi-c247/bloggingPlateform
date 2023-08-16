"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usercontroller_1 = require("../controller/usercontroller");
const passport_1 = __importDefault(require("../config/passport"));
const router = (0, express_1.Router)();
router.post('/createUser', usercontroller_1.createUserController);
router.put('/updateUser/:id', usercontroller_1.updateUserController);
router.get('/retrievingUser', passport_1.default.authenticate('jwt', { session: false }), usercontroller_1.retrievingUserController);
router.post('/login', usercontroller_1.loginController);
router.delete('/deleteUser/:id', usercontroller_1.deleteUserController);
exports.default = router;
