"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controller/index");
const passportMail_1 = __importDefault(require("../config/passportMail"));
const router = (0, express_1.Router)();
router.get('/verifyAndDeleteAccount', passportMail_1.default.authenticate('jwt', { session: false }), index_1.verifyAndDeleteController);
exports.default = router;
