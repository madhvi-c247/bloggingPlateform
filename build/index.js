"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./src/router/index");
const db_1 = require("./src/config/db");
const env_1 = require("./src/config/env");
const index_2 = require("./src/middleware/index");
const constant_1 = require("./src/helper/constant");
// import ejs from 'ejs';
const app = (0, express_1.default)();
// app.set('view engine', 'ejs');
// app.get('/home', (req, res) => {
//   let animals = [{ name: 'Alligator' }, { name: 'Crocodile' }];
//   res.render('home', { animals: animals });
// });
(0, db_1.dbConnection)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(`/${constant_1.versions}/user`, index_1.UserRouter);
app.use(`/${constant_1.versions}/article`, index_1.articleRouter);
app.use(`/${constant_1.versions}/comment`, index_1.commentRouter);
app.use(index_2.errorHandler);
app.use(index_2.errorLast);
app.listen(env_1.port, () => {
    console.log('server active');
});
exports.default = app;
