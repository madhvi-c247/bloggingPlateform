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
exports.getAllUser = exports.login = exports.deleteUser = exports.getUser = exports.updateUser = exports.creatUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//create user :-
const creatUser = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const create = yield userModel_1.default.create({
        name: obj.name,
        email: obj.email,
        password: (obj.password = yield bcrypt_1.default.hash(obj.password, 10)),
        age: obj.age,
        number: obj.number,
        role: obj.role,
    });
    return create;
});
exports.creatUser = creatUser;
// Login user :-
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const result = validationResult(req);
        // if (!result.isEmpty()) {
        //   return res.send({ errors: result['errors'][0] });
        // }
        const loginObj = req.body;
        const user = yield userModel_1.default.findOne({
            email: loginObj.email,
        });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const passwordMatch = yield bcrypt_1.default.compare(loginObj.password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const token = jsonwebtoken_1.default.sign({ email: user.email, name: user.name }, 'ZXCVBNM', {
            expiresIn: '1h',
        });
        res.json({ message: 'Logged in sucessful', token });
    }
    catch (error) {
        return error;
    }
});
exports.login = login;
// update User :-
const updateUser = function (obj, id) {
    return __awaiter(this, void 0, void 0, function* () {
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
// get User:-
const getUser = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(authUser);
    const getUser = yield userModel_1.default.findOne({
        email: authUser.email,
    });
    console.log(getUser);
    return getUser;
});
exports.getUser = getUser;
//all user get (Admin)
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield userModel_1.default.find();
    console.log(find);
    return find;
});
exports.getAllUser = getAllUser;
// delete user :-
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield userModel_1.default.findByIdAndDelete(id);
    console.log(find);
    return 'Deleted';
});
exports.deleteUser = deleteUser;
