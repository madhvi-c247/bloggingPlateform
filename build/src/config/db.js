"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyConnection = exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./env");
function dbConnection() {
    mongoose_1.default
        .connect(env_1.DB_URL)
        .then(() => console.log('DB connected at', { DB_URL: env_1.DB_URL }))
        .catch(() => console.log('errorin DB'));
}
exports.dbConnection = dbConnection;
;
function dummyConnection() {
    mongoose_1.default
        .connect('mongodb://127.0.0.1:27017/testing')
        .then(() => console.log('DB connected  dummyConnection'))
        .catch((err) => console.log('errorin fake DB', err));
}
exports.dummyConnection = dummyConnection;
;
