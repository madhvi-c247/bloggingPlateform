"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../src/config/db");
(0, db_1.dummyConnection)();
// mongoose.connect(DB_URL_TESTING, {},async() =>{
//     console.log('Starting populate DB...')
//     await populate()
//     await mongoose.connection.close();
//     console.log('DB has been populated...');
// });
