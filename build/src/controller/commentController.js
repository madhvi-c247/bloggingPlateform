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
exports.deleteCommentController = exports.getCommentController = exports.updateCommentController = exports.createCommentController = void 0;
const commentServices_1 = require("../services/commentServices");
const createCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, commentServices_1.createComment)(req.body);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.createCommentController = createCommentController;
const updateCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, commentServices_1.updateComment)(req.body, req.params.id);
        console.log(req.body);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.updateCommentController = updateCommentController;
const getCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, commentServices_1.getComment)(req.params.id);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.getCommentController = getCommentController;
const deleteCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, commentServices_1.deleteComment)(req.params.id);
        console.log(result);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.deleteCommentController = deleteCommentController;
