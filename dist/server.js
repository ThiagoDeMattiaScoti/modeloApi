"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secret = void 0;
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
exports.secret = 'hashing';
app_1.default.listen(env_1.PORT || 3333, () => {
    console.log('Servidor ligado');
});
