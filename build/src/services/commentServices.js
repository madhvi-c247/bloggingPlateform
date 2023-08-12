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
exports.deleteComment = exports.retrievingComment = exports.updateComment = exports.createComment = void 0;
const commentModel_1 = __importDefault(require("../model/commentModel"));
const articleModel_1 = __importDefault(require("../model/articleModel"));
const userModel_1 = __importDefault(require("../model/userModel"));
const createComment = (obj, id) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield userModel_1.default.findById(id);
    const username = user.name;
    console.log(username);
    // let article: any = await Articleschema.findById(id);
    // const art = article.title;
    console.log(obj);
    yield commentModel_1.default.create({
        // id:obj.id,
        title: obj.title,
        name: username,
        comment: obj.comment,
        date: obj.date,
    });
    return 'Comment created';
});
exports.createComment = createComment;
// const insertComment = async function (obj: reqObj, id: String) {
//   console.log(obj, id);
//   await Commentschema.insertMany(id, {
//     $set: {
//       comment: obj.comment,
//     },
//   });
//   console.log('updating');
// };
// const insertComment = async function (obj: reqObj, id: String) {
//   try {
//     await Commentschema.insertMany([
//       { comment: obj.comment },
//       { comment: obj.comment },
//       { comment: obj.comment },
//     ]);
//   } catch (e) {
//     console.log(e);
//   }
// };
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
const retrievingComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_1.default.findById(id);
    console.log(find);
    return 'find';
});
exports.retrievingComment = retrievingComment;
const deleteComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield commentModel_1.default.findByIdAndDelete(id);
    console.log(find);
    return 'Deleted';
});
exports.deleteComment = deleteComment;
