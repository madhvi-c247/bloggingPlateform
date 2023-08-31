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
const fakeDB_1 = require("../fakeDB/fakeDB");
const constant_1 = require("../src/helper/constant");
const index_1 = __importDefault(require("../index"));
const db_1 = require("../src/config/db");
const chai_1 = require("chai");
before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        (0, db_1.dummyConnection)();
        (0, fakeDB_1.populate)();
    });
});
// create login dummy data
const loginDetails = { email: "xyz@gmail.com", password: 'xyz' };
describe('Authentication', () => {
    it('user can not login if user email and password will be wrong', (done) => {
        supertest_1.default
            .agent(index_1.default)
            .post(`/${constant_1.versions}/user/login`)
            .send({ email: 'someone', password: 'a' })
            .expect(401)
            .then((res) => {
            (0, chai_1.expect)(res.body.error);
            done();
        })
            .catch((err) => done(err));
    });
    // let token:string =  Jwt.sign({ email: loginDetails.email, name: loginDetails.password }, 'ZXCVBNM', {
    //       expiresIn: '1h',
    //     });
    let token;
    it('if email and password are correct so they will give us token', (done) => {
        supertest_1.default
            .agent(index_1.default)
            .post(`/${constant_1.versions}/user/login`)
            .send(loginDetails)
            .expect(200)
            .then((res) => {
            (0, chai_1.expect)(res.body.token);
            token = res.body.token;
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
});
describe('User', () => {
    it('we can not create user ', (done) => {
        supertest_1.default
            .agent(index_1.default)
            .post(`/${constant_1.versions}/user/createUser`)
            .send({ name: '', email: '', password: '', age: '', number: '', role: '' })
            .expect(401)
            .then((res) => {
            (0, chai_1.expect)(res.body.error);
            done();
        })
            .catch((err) => done(err));
    });
    let data;
    it('Details are valide so you can create user', (done) => {
        supertest_1.default
            .agent(index_1.default)
            .post(`/${constant_1.versions}/user/createUser`)
            .send({ name: 'pooja', email: 'pooja@gmail.com', password: 'pooja', age: '21', number: '454676723', role: 'admin' })
            .expect(200)
            .then((res) => {
            (0, chai_1.expect)(res.body.data);
            data = res.body.data;
            done();
        })
            .catch((err) => {
            done(err);
        });
    });
});
