"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
var connection = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
});
connection.connect(function (err) {
    if (!err) {
        console.log("MySQL database connected");
    }
    else {
        console.log("Unable to connect with db", err);
    }
});
exports.default = connection;
