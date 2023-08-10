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
exports.retrievingArticle = exports.updateArticle = exports.creatarticle = void 0;
const articleModel_1 = __importDefault(require("../model/articleModel"));
const articleModel_2 = __importDefault(require("../model/articleModel"));
const creatarticle = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    yield articleModel_1.default.create({
        // id:obj.id,
        article: obj.article,
        date: obj.date,
    });
    console.log(obj);
    return 'article created';
});
exports.creatarticle = creatarticle;
const updateArticle = function (obj, id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(obj, id);
        yield articleModel_2.default.findByIdAndUpdate(id, {
            $set: {
                article: obj.article,
                date: obj.date,
            },
        });
        console.log('updating');
    });
};
exports.updateArticle = updateArticle;
const retrievingArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield articleModel_2.default.findById(id);
    console.log(find);
    return 'find';
});
exports.retrievingArticle = retrievingArticle;
