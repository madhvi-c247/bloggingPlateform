"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorLast = (err, req, res, next) => {
    res.status(500);
    res.send('Something went wrong!!!');
};
exports.default = errorLast;
