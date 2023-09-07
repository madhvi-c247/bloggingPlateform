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
exports.verifyAndDelete = exports.deleteByMail = exports.getAllUser = exports.login = exports.deleteUser = exports.getUser = exports.updateUser = exports.creatUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mail_1 = __importDefault(require("../nodeMailer/mail"));
const confirmDeletion_1 = __importDefault(require("../nodeMailer/confirmDeletion"));
const ioredis_1 = __importDefault(require("ioredis"));
const redisclient = new ioredis_1.default();
//create user :-
const creatUser = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const create = yield userModel_1.default.create(obj);
    return { created: 'your account created' };
});
exports.creatUser = creatUser;
// Login user :-
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginObj = req.body;
        const user = yield userModel_1.default.findOne({
            email: loginObj.email,
        });
        if (!user) {
            return res.status(406).json({ message: 'Email Id is not correct' });
        }
        const passwordMatch = yield user.validatePassword(loginObj.password, user.password);
        if (!passwordMatch) {
            return res.status(406).json({ message: 'Password incorrect' });
        }
        else {
            const token = jsonwebtoken_1.default.sign({
                email: user.email,
                name: user.name,
            }, 'ZXCVBNM', {
                expiresIn: '1h',
                algorithm: 'HS256',
            });
            res.json({ message: 'Logged in sucessful', token });
        }
    }
    catch (error) {
        return res.status(401).json({ message: 'invalid details' });
    }
});
exports.login = login;
// update User :-
const updateUser = function (user, obj, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const loginUserId = user._id.toString();
        if (loginUserId == id) {
            try {
                const result = yield userModel_1.default.findByIdAndUpdate(id, {
                    name: obj.name,
                    email: obj.email,
                    password: obj.password,
                    age: obj.age,
                    number: obj.number,
                    role: obj.role,
                });
                return result;
            }
            catch (error) {
                return error;
            }
        }
        else {
            throw new Error('User id is not correct');
        }
    });
};
exports.updateUser = updateUser;
// get User:-
const getUser = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield userModel_1.default.findOne({
        email: authUser.email,
    });
    return getUser;
});
exports.getUser = getUser;
//all user get (Admin)
const getAllUser = (pagination) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit, page } = pagination;
    const cachedData = yield redisclient.get(`allUsers?page${page}?limit${limit}`);
    if (cachedData) {
        return JSON.parse(cachedData);
    }
    else {
        const aggregateQuery = userModel_1.default.aggregate([
            {
                $project: {
                    _id: 0,
                    name: '$name',
                    email: '$email',
                    age: '$age',
                    number: '$number',
                    role: '$role',
                },
            },
        ]);
        const options = {
            page,
            limit,
        };
        const response = yield userModel_1.default.aggregatePaginate(aggregateQuery, options)
            .then((result) => result)
            .catch((err) => console.log(err));
        redisclient.set(`allUsers?page${page}?limit${limit}`, JSON.stringify(aggregateQuery));
        return response;
    }
});
exports.getAllUser = getAllUser;
// delete user :-
const deleteUser = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    const Id = user._id.toString();
    if (Id == id) {
        const deleted = yield userModel_1.default.findOneAndDelete({ _id: id });
        return deleted;
    }
    else {
        throw new Error('User id is not correct');
    }
});
exports.deleteUser = deleteUser;
// Delete by mail:-
const deleteByMail = (user, obj, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const passwordMatch = yield user.validatePassword(obj.password, user.password);
        const token = jsonwebtoken_1.default.sign({
            email: user.email,
            name: user.name,
        }, 'ZXCVBNM', {
            expiresIn: '1h',
            algorithm: 'HS256',
        });
        if (passwordMatch) {
            if (user.secret_question.fathername === obj.secret_question) {
                (0, mail_1.default)(user.email, token);
                return { email: 'mail sended' };
            }
            else {
                return res.status(406).json({ error: 'security question not match' });
            }
        }
        else {
            return res.status(406).json({ error: 'password not match' });
        }
    }
    catch (error) {
        return { error: 'unauthorized' };
    }
});
exports.deleteByMail = deleteByMail;
const verifyAndDelete = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield userModel_1.default.findOneAndDelete({
        email: user.email,
    });
    (0, confirmDeletion_1.default)(user.email);
    return { deleted: 'your account has been deleted' };
});
exports.verifyAndDelete = verifyAndDelete;
