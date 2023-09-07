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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const articleFakeDB_1 = require("../fakeDB/articleFakeDB");
const constant_1 = require("../src/helper/constant");
const index_1 = __importDefault(require("../index"));
const db_1 = require("../src/config/db");
const chai_1 = require("chai");
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ObjectId = mongoose_1.default.Types.ObjectId;
const loginDetails = { email: 'xyz@gmail.com', password: 'xyz', name: 'xyz' };
let token = "";
before(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, db_1.dummyConnection)();
    (0, articleFakeDB_1.articlepopulate)();
    token = jsonwebtoken_1.default.sign({ email: loginDetails.email, name: loginDetails.name }, 'ZXCVBNM', {
        expiresIn: '1h',
        algorithm: 'HS256'
    });
}));
let userId;
let articleId;
// create Article-------------------------------------------------------
describe('Articlecreate', () => {
    it('we can not  create article ', (done) => {
        console.log("token-------", token);
        supertest_1.default
            .agent(index_1.default)
            .post(`/${constant_1.versions}/article/createArticle`)
            .set('Authorization', `Bearer ${token}`)
            .send({ title: '', article: '', author: '', date: '', categories: '' })
            .expect(404)
            .then((res) => {
            console.log("------------", res.body);
            (0, chai_1.expect)(res.body.error);
            done();
        })
            .catch((err) => done(err));
    });
    let data;
    it('we can create article', (done) => {
        supertest_1.default
            .agent(index_1.default)
            .post(`/${constant_1.versions}/article/createArticle/64f1bdbccab2a6379ebcefae`)
            .set('Authorization', `Bearer ${token}`)
            .send({ title: 'new title', article: 'new article', categories: 'GK' })
            .expect(200)
            .then((res) => {
            (0, chai_1.expect)(res.body.data);
            data = res.body.data;
            userId = res.body.author;
            articleId = res.body._id;
            console.log("Article id--------", articleId);
            console.log("Article userId--------", userId);
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
});
//get all user-------------------------------------------------
describe('GetAllArticle', () => {
    it('get all article', (done) => {
        supertest_1.default
            .agent(index_1.default)
            .get(`/${constant_1.versions}/article/getAllArticle?search=GK&page=1&limit=3`)
            .send({ limit: 2, page: 1 })
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .then((res) => {
            (0, chai_1.expect)(res.body.message);
            done();
        })
            .catch((err) => done(err));
    });
});
