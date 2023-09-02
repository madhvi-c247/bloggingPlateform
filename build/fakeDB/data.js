"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const ObjectId=mongoose.Types.ObjectId
const data = {
    user: [
        {
            //  id:ObjectId,
            // _id:new ObjectId(ObjectId.toString()),
            name: 'xyz',
            email: 'xyz@gmail.com',
            password: 'xyz',
            age: 20,
            number: 89898989,
            role: 'normal',
        },
    ],
    article: [
        {
            title: 'title',
            article: 'article',
            author: mongoose_1.default.Types.ObjectId,
            categories: 'GK'
        },
    ],
    comment: [
        {
            articleId: mongoose_1.default.Types.ObjectId,
            userId: mongoose_1.default.Types.ObjectId,
            comment: 'very nice',
        },
    ],
};
exports.default = data;
