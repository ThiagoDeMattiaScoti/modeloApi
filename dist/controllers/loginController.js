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
exports.LoginController = void 0;
const loginServices_1 = require("../services/loginServices");
const loginServices = new loginServices_1.LoginServices;
class LoginController {
    static validateLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, password } = req.body;
            const data = { name, password };
            const isValid = yield loginServices.validateLogin(data);
            if (!isValid)
                return res.status(404).json({ error: 'Nome de usuário ou seha incorreto' });
            return res.status(200).json({ message: 'Usuário logado com sucesso' });
        });
    }
}
exports.LoginController = LoginController;
