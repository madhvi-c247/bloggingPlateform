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
exports.getAllArticle = exports.getByCategory = exports.deleteArticle = exports.getArticle = exports.updateArticle = exports.creatarticle = void 0;
const articleModel_1 = __importDefault(require("../model/articleModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
// create Article :-
const creatarticle = (id, obj) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield articleModel_1.default.create({
        title: obj.title,
        article: obj.article,
        author: id,
        date: obj.date,
        categories: obj.categories,
    });
    return article;
});
exports.creatarticle = creatarticle;
// update Article :-
const updateArticle = function (obj, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const update = yield articleModel_1.default.findByIdAndUpdate(id, {
            $set: {
                title: obj.title,
                article: obj.article,
                author: obj.author,
                date: obj.date,
                categories: obj.categories,
            },
        });
        console.log('updating');
        return update;
    });
};
exports.updateArticle = updateArticle;
//get All Article
const getAllArticle = (sortobj, query) => __awaiter(void 0, void 0, void 0, function* () {
    let sort = {};
    const field = sortobj.field;
    const sortDirection = sortobj.sortDirection;
    let { search, page, limit } = query;
    sort = { createdAt: -1 };
    if (field) {
        sort = { [field]: sortDirection };
    }
    const columns = ['categories', 'title'];
    let filterQuery = {};
    let or = [];
    if (typeof search == 'string') {
        const searchString = search.trim();
        columns.forEach((col) => {
            or.push({ [col]: { $regex: `.*${searchString}.*`, $options: 'i' } });
        });
        filterQuery.$or = or;
    }
    console.log('limit-----', limit);
    const aggregateQuery = articleModel_1.default.aggregate([
        { $match: filterQuery },
        {
            $lookup: {
                from: 'users',
                localField: 'author',
                foreignField: '_id',
                as: 'user',
            },
        },
        { $unwind: '$user' },
        {
            $project: {
                _id: 0,
                title: {
                    $toLower: '$title',
                },
                article: '$article',
                author: '$user.name',
                date: '$date',
                categories: '$categories',
            },
        },
        { $sort: sort },
        // { $limit: limit },
        // { $skip: page },
    ]);
    console.log(aggregateQuery);
    const options = {
        search,
        page,
        limit,
    };
    const response = yield articleModel_1.default.aggregatePaginate(aggregateQuery, options)
        .then((result) => result)
        .catch((err) => console.log(err));
    console.log(response);
    return aggregateQuery;
});
exports.getAllArticle = getAllArticle;
// get Article:-
const getArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_1.default.aggregate([
        { $match: { _id: new ObjectId(id) } },
        {
            $lookup: {
                from: 'users',
                localField: 'author',
                foreignField: '_id',
                as: 'user',
            },
        },
        { $unwind: '$user' },
        {
            $project: {
                title: 1,
                article: 1,
                author: '$user.name',
                date: 1,
                categories: 1,
            },
        },
    ]);
    console.log(find);
    return find;
});
exports.getArticle = getArticle;
// get Article by categories :-
const getByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_1.default.aggregate([
        { $match: { categories: category } },
        {
            $lookup: {
                from: 'users',
                localField: 'author',
                foreignField: '_id',
                as: 'user',
            },
        },
        { $unwind: '$user' },
        { $limit: 3 },
        {
            $project: {
                title: 1,
                article: 1,
                author: '$user.name',
                date: 1,
                categories: 1,
            },
        },
    ]);
    console.log(find);
    return find;
});
exports.getByCategory = getByCategory;
// delete Article :-
const deleteArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteArticle = yield articleModel_1.default.findByIdAndDelete(id);
    return deleteArticle;
});
exports.deleteArticle = deleteArticle;
