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
exports.getAllArticle = exports.retrievingByCategory = exports.deleteArticle = exports.getArticle = exports.updateArticle = exports.creatarticle = void 0;
const articleModel_1 = __importDefault(require("../model/articleModel"));
// create Article :-
const creatarticle = (id, obj) => __awaiter(void 0, void 0, void 0, function* () {
    yield articleModel_1.default.create({
        // id:obj.id,
        title: obj.title,
        article: obj.article,
        author: id,
        date: obj.date,
        categories: obj.categories,
    });
    // console.log(obj);
    return 'article created';
});
exports.creatarticle = creatarticle;
// update Article :-
const updateArticle = function (obj, id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(obj, id);
        yield articleModel_1.default.findByIdAndUpdate(id, {
            $set: {
                title: obj.title,
                article: obj.article,
                author: obj.author,
                date: obj.date,
                categories: obj.categories,
            },
        });
        console.log('updating');
        return 'comment get';
    });
};
exports.updateArticle = updateArticle;
//get All Article
const getAllArticle = () => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_1.default.find();
    console.log(find);
    return 'All found';
});
exports.getAllArticle = getAllArticle;
// get Article:-
const getArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_1.default.findById(id);
    console.log(find);
    return 'find';
});
exports.getArticle = getArticle;
// get Article by categories :-
const retrievingByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_1.default.find({ categories: category });
    if (find) {
        console.log(find);
    }
    else {
        console.log('Not found ');
    }
    return 'found';
});
exports.retrievingByCategory = retrievingByCategory;
// delete Article :-
const deleteArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_1.default.findByIdAndDelete(id);
    console.log(find);
    return 'Deleted';
});
exports.deleteArticle = deleteArticle;
