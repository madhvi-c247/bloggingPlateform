"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = exports.articleRouter = exports.UserRouter = void 0;
const userRouter_1 = __importDefault(require("./userRouter"));
exports.UserRouter = userRouter_1.default;
const articleRouter_1 = __importDefault(require("./articleRouter"));
exports.articleRouter = articleRouter_1.default;
const commentRouter_1 = __importDefault(require("./commentRouter"));
exports.commentRouter = commentRouter_1.default;
