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
exports.LogiRepository = void 0;
const passwordHashing_1 = require("../middlewares/passwordHashing");
class LogiRepository {
    login(name, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPasswordValid = yield (0, passwordHashing_1.validatePassword)(name, password);
            return isPasswordValid;
        });
    }
}
exports.LogiRepository = LogiRepository;
