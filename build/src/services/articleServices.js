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
exports.getComment = exports.deleteArticle = exports.retrievingArticle = exports.updateArticle = exports.creatarticle = void 0;
const articleModel_1 = __importDefault(require("../model/articleModel"));
const userModel_1 = __importDefault(require("../model/userModel"));
const commentModel_1 = __importDefault(require("../model/commentModel"));
const creatarticle = (id, obj) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield userModel_1.default.findById(id);
    const username = user.name;
    // console.log(user.name);
    yield articleModel_1.default.create({
        // id:obj.id,
        title: obj.title,
        author: username,
        date: obj.date,
        // comment: obj.comment,
    });
    // console.log(obj);
    return 'article created';
});
exports.creatarticle = creatarticle;
const getComment = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        let commentcollection = yield commentModel_1.default.findById(id);
        const usercom = commentcollection.comment;
        const date = commentcollection.date;
        const Uname = commentcollection.name;
        console.log(usercom, date, Uname);
        yield articleModel_1.default.findByIdAndUpdate(id, {
            comment: [Uname, usercom, date],
        });
    });
};
exports.getComment = getComment;
const updateArticle = function (obj, id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(obj, id);
        yield articleModel_1.default.findByIdAndUpdate(id, {
            $set: {
                title: obj.title,
                date: obj.date,
            },
        });
        console.log('updating');
    });
};
exports.updateArticle = updateArticle;
const retrievingArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_1.default.findById(id);
    console.log(find);
    return 'find';
});
exports.retrievingArticle = retrievingArticle;
const deleteArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_1.default.findByIdAndDelete(id);
    console.log(find);
    return 'Deleted';
});
exports.deleteArticle = deleteArticle;
