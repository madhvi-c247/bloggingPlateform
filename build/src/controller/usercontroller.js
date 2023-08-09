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
exports.retrievingUserController = exports.updateUserController = exports.createUserController = void 0;
const userService_1 = require("../services/userService");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, userService_1.creatUser)(req.body);
    // console.log("running");
    // console.log(req.body)
    return res.status(200).send(result);
});
exports.createUserController = createUserController;
const updateUserController = (req, res) => {
    const result = (0, userService_1.updateUser)(req.body, req.params.id);
    // console.log('running');
    console.log(req.body);
    return res.status(200).send(result);
};
exports.updateUserController = updateUserController;
const retrievingUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, userService_1.retrievingUser)(req.body);
    console.log(result);
    return res.status(200).send(result);
});
exports.retrievingUserController = retrievingUserController;
