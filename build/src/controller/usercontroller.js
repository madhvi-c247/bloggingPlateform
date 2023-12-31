"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAndDeleteController = exports.deleteByMailController = exports.getAllUserController = exports.loginController = exports.deleteUserController = exports.getUserController = exports.updateUserController = exports.createUserController = void 0;
const userService_1 = require("../services/userService");
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.creatUser)(req.body);
        return res.status(200).send(result);
    }
    catch (error) {
        // next(error);
        return res.status(409).json({ message: 'your account already exist' });
    }
});
exports.createUserController = createUserController;
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield (0, userService_1.login)(req, res);
    }
    catch (error) {
        next(error);
    }
});
exports.loginController = loginController;
const updateUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requser = req.user;
        const result = yield (0, userService_1.updateUser)(requser, req.body, req.params.id);
        return res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.updateUserController = updateUserController;
const getUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.getUser)(req.body);
        return res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getUserController = getUserController;
const getAllUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.getAllUser)(req.body);
        return res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUserController = getAllUserController;
const deleteUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requser = req.user;
        const result = yield (0, userService_1.deleteUser)(requser, req.params.id);
        return res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUserController = deleteUserController;
const deleteByMailController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.deleteByMail)(req.user, req.body, res);
        return res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteByMailController = deleteByMailController;
const verifyAndDeleteController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.verifyAndDelete)(req.user);
        return res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.verifyAndDeleteController = verifyAndDeleteController;
