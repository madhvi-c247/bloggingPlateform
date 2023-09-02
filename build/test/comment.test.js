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
const commentFakeDB_1 = require("../fakeDB/commentFakeDB");
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
    (0, commentFakeDB_1.commentpopulate)();
    token = jsonwebtoken_1.default.sign({ email: loginDetails.email, name: loginDetails.name }, 'ZXCVBNM', {
        expiresIn: '1h',
        algorithm: 'HS256'
    });
}));
// let userId:ObjectId
// let articleId:ObjectId
// create comment-------------------------------------------------------
describe('Commentcreate', () => {
    let data;
    it('we can create comment', (done) => {
        supertest_1.default
            .agent(index_1.default)
            .post(`/${constant_1.versions}/comment/createComment`)
            .set('Authorization', `Bearer ${token}`)
            .send({ articleId: '64f1c748b12956631e6c31de', userId: '64f1bdbccab2a6379ebcefae', comment: 'good good' })
            .expect(200)
            .then((res) => {
            console.log(res.body);
            (0, chai_1.expect)(res.body.data);
            data = res.body.data;
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
});
