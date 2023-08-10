"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./src/router/userRouter"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3000;
mongoose_1.default.connect('mongodb://127.0.0.1:27017/blogging')
    .then(() => console.log('DB connected'))
    .catch(() => console.log('errorin DB'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use('/user', userRouter_1.default);
app.use('/article', articleRouter);
app.listen(port, () => {
    console.log("server active");
});
