"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Userschema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: ['normal', 'admin'],
        default: 'normal',
    },
});
Userschema.pre(['save'], function (next) {
    const user = this;
    bcrypt_1.default.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt_1.default.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});
Userschema.pre(['findOneAndUpdate'], function (next) {
    let update = Object.assign({}, this.getUpdate());
    if (update.password) {
        bcrypt_1.default.genSalt(10, (err, salt) => {
            if (err) {
                return next(err);
            }
            bcrypt_1.default.hash(update.password, salt, (err, hash) => {
                if (err) {
                    return next(err);
                }
                update.password = hash;
                this.setUpdate(update);
                next();
            });
        });
    }
    else {
        next();
    }
});
Userschema.methods.validatePassword = function (candidatePassword) {
    bcrypt_1.default.compare(candidatePassword, this.password, (error, isSuccess) => {
        if (error) {
            return false;
        }
        return true;
    });
};
exports.default = mongoose_1.default.model('User', Userschema);
