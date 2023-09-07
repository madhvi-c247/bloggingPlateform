"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.email_password = exports.key = exports.port = exports.DB_URL_TESTING = exports.DB_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DB_URL = (_a = process.env.DB_URL) !== null && _a !== void 0 ? _a : '';
exports.DB_URL_TESTING = (_b = process.env.DB_URL_TESTING) !== null && _b !== void 0 ? _b : '';
exports.port = process.env.port;
exports.key = 'ZXCVBNM';
exports.email_password = (_c = process.env.EMAIL_PASSWORD) !== null && _c !== void 0 ? _c : '';
