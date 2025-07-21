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
exports.hashPaswword = hashPaswword;
exports.validatePassword = validatePassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRepository_1 = require("../repositories/userRepository");
function hashPaswword(password, salt) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hash = yield bcrypt_1.default.hash(password, salt);
            return hash;
        }
        catch (err) {
            console.log('Ocorreu um erro na geração do hash de senha', err);
            throw new Error('Ocorreu um erro na geração do hash de senha');
        }
    });
}
function validatePassword(name, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepository = new userRepository_1.UserRepository;
        const user = yield userRepository.getUserByName(name);
        if (!user)
            return false;
        if (!user.password)
            return false;
        try {
            const isValid = yield bcrypt_1.default.compare(password, user.password);
        }
        catch (err) {
            return err;
        }
    });
}
