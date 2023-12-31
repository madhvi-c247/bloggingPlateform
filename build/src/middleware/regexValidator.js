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
exports.loginValidator = exports.mailValidator = exports.fieldEmptyError = exports.validatePassword = exports.validateEmail = void 0;
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
// email Validator-------------------------------
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const validateEmail = [
    (0, express_validator_1.body)('email').notEmpty().matches(emailRegex),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.send({ errors: 'email is not correct' });
        }
        next();
    }),
];
exports.validateEmail = validateEmail;
//Password Validator----------------------------
const passwordRegex = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16})$/;
const validatePassword = [
    (0, express_validator_1.body)('password').notEmpty().matches(passwordRegex),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.send({ errors: 'password is not correct' });
        }
        next();
    }),
];
exports.validatePassword = validatePassword;
const fieldEmptyError = [
    (0, express_validator_1.body)('name').notEmpty(),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.status(404).send({ error: 'write your name' });
        }
        next();
    }),
    (0, express_validator_1.body)('email').notEmpty(),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.status(404).send({ error: 'write your email' });
        }
        next();
    }),
    (0, express_validator_1.body)('age').notEmpty(),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ error: 'write your age' });
        }
        next();
    }),
    (0, express_validator_1.body)('number').notEmpty(),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ error: 'write your number' });
        }
        next();
    }),
    (0, express_validator_1.body)('role').notEmpty().withMessage('write your role'),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ error: 'write your role' });
        }
        next();
    }),
];
exports.fieldEmptyError = fieldEmptyError;
const mailValidator = [
    (0, express_validator_1.body)('password').notEmpty(),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: 'enter your password' });
        }
        next();
    }),
    (0, express_validator_1.body)('secret_question').notEmpty(),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: 'enter your sequrity question' });
        }
        next();
    }),
];
exports.mailValidator = mailValidator;
const loginValidator = [
    (0, express_validator_1.body)('email').notEmpty(),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: 'enter your email' });
        }
        next();
    }),
    (0, express_validator_1.body)('password').notEmpty(),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, express_validator_2.validationResult)(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: 'enter your password' });
        }
        next();
    }),
];
exports.loginValidator = loginValidator;
