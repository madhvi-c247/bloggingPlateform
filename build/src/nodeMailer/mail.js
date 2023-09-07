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
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_1 = require("../config/env");
const transport = nodemailer_1.default.createTransport({
    service: 'Gmail',
    auth: {
        user: 'xyz@gmail.com',
        pass: 'xyz',

    },
});
// var transport = nodemailer.createTransport({
//   host: 'sandbox.smtp.mailtrap.io',
//   port: 2525,
//   auth: {
//     user: 'e5d4573b0b01a3',
//     pass: '723522395ab00d',
//   },
// });
function newmail(email, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const path = 'http://localhost:3000/v1/user/verifyAndDeleteAccount';
        try {
            const info = yield transport.sendMail({
                from: 'madhvi.s@chapter247.com',
                to: email,
                subject: 'Confirmation mail',
                html: `Please confirm, you want to delete your account <a href='http://localhost:3000/v1/user/verifyAndDeleteAccount?token=${token}'>click here to confirm</a>`,
            });
            console.log('Message sent: %s', info.messageId);
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.default = newmail;
