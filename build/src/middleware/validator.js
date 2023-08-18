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
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
const error = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (0, express_validator_2.validationResult)(req);
    if ((0, express_validator_1.body)('email').notEmpty() && (0, express_validator_1.body)('password').notEmpty()) {
        console.log('error');
    }
    else if (!result.isEmpty()) {
        return res.send({ errors: result['errors'][0] });
    }
});
exports.default = error;
