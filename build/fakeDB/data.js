"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const id = mongoose_1.default.Types.ObjectId;
const data = {
    user: [
        {
            _id: id,
            name: 'madhvi',
            email: 'madhvi@gmail.com',
            password: 'madhvi',
            age: 20,
            number: 89898989,
            role: 'normal',
        },
    ],
};
exports.default = data;
