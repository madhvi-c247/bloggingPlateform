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
exports.getAllUserController = exports.loginController = exports.deleteUserController = exports.getUserController = exports.updateUserController = exports.createUserController = void 0;
const userService_1 = require("../services/userService");
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.creatUser)(req.body);
        return res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.createUserController = createUserController;
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(userService_1.login);
        return yield (0, userService_1.login)(req, res);
    }
    catch (error) {
        next(error);
    }
});
exports.loginController = loginController;
const updateUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.updateUser)(req.body, req.params.id);
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
        console.log(result);
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
        console.log(result);
        return res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUserController = getAllUserController;
const deleteUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.deleteUser)(req.params.id);
        console.log(result);
        return res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUserController = deleteUserController;
