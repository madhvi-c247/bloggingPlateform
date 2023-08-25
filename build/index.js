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
const errorHandler_1 = __importDefault(require("./src/middleware/errorHandler"));
const errorLast_1 = __importDefault(require("./src/middleware/errorLast"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.get('/home', (req, res) => {
    let animals = [{ name: 'Alligator' }, { name: 'Crocodile' }];
    res.render('home', { animals: animals });
});
(0, db_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use('/user', userRouter_1.default);
app.use('/article', articleRouter_1.default);
app.use('/comment', commentRouter_1.default);
app.use(errorHandler_1.default);
app.use(errorLast_1.default);
app.listen(env_1.port, () => {
    console.log('server active');
});
