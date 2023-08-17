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
// create Comment :-
const createComment = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(obj);
    yield commentModel_1.default.create({
        userId: obj.userId,
        articleId: obj.articleId,
        comment: obj.comment,
        date: obj.date,
    });
    return 'Comment created';
});
exports.createComment = createComment;
// update comment :-
const updateComment = function (obj, id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(obj, id);
        yield commentModel_1.default.findByIdAndUpdate(id, {
            $set: {
                comment: obj.comment,
            },
        });
        console.log('updating');
    });
};
exports.updateComment = updateComment;
// delete Comment :-
const deleteComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield commentModel_1.default.findByIdAndDelete(id);
    console.log(find);
    return 'Deleted';
});
exports.deleteComment = deleteComment;
//get comments by article id
const getComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield commentModel_1.default.find({
        articleId: id,
    });
    console.log(find);
    return find;
});
exports.getComment = getComment;
