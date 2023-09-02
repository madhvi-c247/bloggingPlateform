"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyConnection = exports.dbConnection = exports.NODE_ENV = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./env");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.NODE_ENV = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : '';
function dbConnection() {
    if (exports.NODE_ENV == "dev") {
        mongoose_1.default
            .connect(env_1.DB_URL)
            .then(() => console.log('DB connected at', { DB_URL: env_1.DB_URL }))
            .catch(() => console.log('errorin DB'));
    }
}
exports.dbConnection = dbConnection;
;
function dummyConnection() {
    if (exports.NODE_ENV == "testing") {
        mongoose_1.default
            .connect('mongodb://127.0.0.1:27017/testing')
            .then(() => console.log('DB connected  dummyConnection'))
            .catch((err) => console.log('errorin fake DB', err));
    }
}
exports.dummyConnection = dummyConnection;
;
