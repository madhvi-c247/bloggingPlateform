"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usercontroller_1 = require("../controller/usercontroller");
const express_validator_1 = require("express-validator");
const passport_1 = __importDefault(require("../config/passport"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
router.post('/createUser', usercontroller_1.createUserController);
router.put('/updateUser/:id', usercontroller_1.updateUserController);
router.get('/getAllUser', passport_1.default.authenticate('jwt', { session: false }), (0, auth_1.default)('admin'), usercontroller_1.getAllUserController);
router.get('/getUser', passport_1.default.authenticate('jwt', { session: false }), usercontroller_1.getUserController);
router.post('/login', (0, express_validator_1.body)('email').notEmpty(), (0, express_validator_1.body)('password').notEmpty(), usercontroller_1.loginController);
router.delete('/deleteUser/:id', passport_1.default.authenticate('jwt', { session: false }), (0, auth_1.default)('admin'), usercontroller_1.deleteUserController);
exports.default = router;
