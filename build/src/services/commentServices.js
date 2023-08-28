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
exports.deleteComment = exports.getComment = exports.updateComment = exports.createComment = void 0;
const commentModel_1 = __importDefault(require("../model/commentModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
// create Comment :-
const createComment = (user, obj) => __awaiter(void 0, void 0, void 0, function* () {
    const Id = user._id.toString();
    {
        const created = yield commentModel_1.default.create({
            userId: user._id,
            articleId: obj.articleId,
            comment: obj.comment,
            date: obj.date,
        });
        return created;
    }
    //
});
exports.createComment = createComment;
// update comment :-
const updateComment = function (user, obj) {
    return __awaiter(this, void 0, void 0, function* () {
        const Id = user._id.toString();
        if (Id == obj.userId) {
            const update = yield commentModel_1.default.findOneAndUpdate({ _id: obj.commentId }, {
                $set: {
                    comment: obj.comment,
                },
            });
            return update;
        }
        else {
            throw new Error('User id is not correct');
        }
    });
};
exports.updateComment = updateComment;
// delete Comment :-
const deleteComment = (user, obj) => __awaiter(void 0, void 0, void 0, function* () {
    const Id = user._id.toString();
    if (Id == obj.userId) {
        const deletecomment = yield commentModel_1.default.findOneAndDelete({
            _id: obj.commentId,
        });
        return deletecomment;
    }
    else {
        throw new Error('User id is not correct');
    }
});
exports.deleteComment = deleteComment;
const getComment = (pagination) => __awaiter(void 0, void 0, void 0, function* () {
    let { id, page, limit } = pagination;
    const aggregateQuery = commentModel_1.default.aggregate([
        { $match: { articleId: new ObjectId(id) } },
        // Article id
        {
            $lookup: {
                from: 'articles',
                localField: 'articleId',
                foreignField: '_id',
                as: 'article_name',
            },
        },
        { $unwind: '$article_name' },
        //user id
        {
            $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'user',
            },
        },
        { $unwind: '$user' },
        {
            $project: {
                _id: 0,
                article: '$article_name.article',
                name: '$user.name',
                comment: 1,
            },
        },
    ]);
    const options = { id, page, limit };
    const response = yield commentModel_1.default.aggregatePaginate(aggregateQuery, options)
        .then((result) => result)
        .catch((err) => console.log(err));
    return response;
});
exports.getComment = getComment;
