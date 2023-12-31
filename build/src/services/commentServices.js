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
const ioredis_1 = __importDefault(require("ioredis"));
const redisclient = new ioredis_1.default();
const ObjectId = mongoose_1.default.Types.ObjectId;
// create Comment :-
const createComment = (user, obj) => __awaiter(void 0, void 0, void 0, function* () {
    const loginId = user._id.toString();
    {
        const created = yield commentModel_1.default.create({
            userId: loginId,
            articleId: obj.articleId,
            comment: obj.comment,
            date: obj.date,
        });
        return { done: 'your comment created!!!' };
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
            return { successful: 'your updation successfully done!!!' };
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
        return { deleted: 'your comment deleted' };
    }
    else {
        throw new Error('User id is not correct');
    }
});
exports.deleteComment = deleteComment;
// get comment by Article Id :-
const getComment = (pagination) => __awaiter(void 0, void 0, void 0, function* () {
    let { id, page, limit } = pagination;
    const cachedData = yield redisclient.get(`allcomments?page${page}?limit${limit}`);
    if (cachedData) {
        return JSON.parse(cachedData);
    }
    else {
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
        redisclient.set(`allcomments?page${page}?limit${limit}`, JSON.stringify(response));
        return response;
    }
});
exports.getComment = getComment;
