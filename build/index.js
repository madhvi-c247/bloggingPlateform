"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./src/router/userRouter"));
const articleRouter_1 = __importDefault(require("./src/router/articleRouter"));
const db_1 = __importDefault(require("./src/config/db"));
const env_1 = require("./src/config/env");
const commentRouter_1 = __importDefault(require("./src/router/commentRouter"));
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use('/user', userRouter_1.default);
app.use('/article', articleRouter_1.default);
app.use('/comment', commentRouter_1.default);
app.listen(env_1.port, () => {
    console.log("server active");
});