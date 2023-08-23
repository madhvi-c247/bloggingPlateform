"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorLast = (err, req, res) => {
    res.status(500);
    console.log('------------------------', res);
    res.send('Something went wrong!!!');
};
exports.default = errorLast;
