"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorLast = (err, req, res, next) => {
    res.status(401);
    res.send('Something went wrong!!!');
    next();
};
exports.default = errorLast;
