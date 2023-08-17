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
exports.getAllArticleController = exports.retrievingCategoryController = exports.deleteArticleController = exports.retrievingUserArticle = exports.updateUserArticle = exports.createUserArticle = void 0;
const articleServices_1 = require("../services/articleServices");
const createUserArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, articleServices_1.creatarticle)(req.params.id, req.body);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.createUserArticle = createUserArticle;
const updateUserArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, articleServices_1.updateArticle)(req.body, req.params.id);
        console.log(req.body);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.updateUserArticle = updateUserArticle;
const getAllArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, articleServices_1.getAllArticle)();
        console.log(result);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.getAllArticleController = getAllArticleController;
const retrievingUserArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, articleServices_1.getArticle)(req.params.id);
        console.log(result);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.retrievingUserArticle = retrievingUserArticle;
const retrievingCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, articleServices_1.retrievingByCategory)(req.body.categories);
        console.log(result);
        // console.log(req.params.categories);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.retrievingCategoryController = retrievingCategoryController;
const deleteArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, articleServices_1.deleteArticle)(req.params.id);
        console.log(result);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.deleteArticleController = deleteArticleController;