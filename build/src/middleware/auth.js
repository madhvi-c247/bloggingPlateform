"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization = (role) => {
    console.log(role);
    return (req, res, next) => {
        const user = req.user;
        console.log('authorization', user);
        if (user.role === role) {
            next();
        }
        else {
            res.sendStatus(403);
        }
    };
};
exports.default = authorization;
