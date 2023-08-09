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
exports.retrievingUser = exports.updateUser = exports.creatUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const creatUser = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    yield userModel_1.default.create({
        name: obj.name,
        email: obj.email,
        password: obj.password,
        age: obj.age,
        number: obj.number,
    });
    console.log(obj);
    return 'user created';
});
exports.creatUser = creatUser;
const updateUser = function (obj, id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(obj, id);
        yield userModel_1.default.findByIdAndUpdate(id, {
            $set: {
                name: obj.name,
                email: obj.email,
                password: obj.password,
                age: obj.age,
                number: obj.number,
            },
        });
        console.log('updating');
    });
};
exports.updateUser = updateUser;
const retrievingUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield userModel_1.default.findById(id);
    console.log(find);
    return 'find';
});
exports.retrievingUser = retrievingUser;
