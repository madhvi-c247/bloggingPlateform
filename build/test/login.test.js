"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const constant_1 = require("../src/helper/constant");
const index_1 = __importDefault(require("./index"));
// create login dummy data
const loginDetails = { email: 'madhvi@gmail.com', password: 'madhvi' };
let token; //save token
describe('Authentication', () => {
    it('user can not login if user email and password will be wrong', (done) => {
        supertest_1.default
            .agent(index_1.default)
            .post(`/${constant_1.versions}/user`)
            .send({ email: 'someone', password: 'a' })
            .expect(401)
            .then((res) => {
            (0, chai_1.expect)(res.body.error).to.equal('wrong email id or password');
            done();
        })
            .catch((err) => done(err));
    });
});
