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
exports.LoginController = void 0;
const loginServices_1 = require("../services/loginServices");
const userRepository_1 = require("../repositories/userRepository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const server_1 = require("../server");
const loginServices = new loginServices_1.LoginServices;
const userRepository = new userRepository_1.UserRepository;
class LoginController {
    static validateLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, password } = req.body;
            const isValid = yield loginServices.validateLogin(name, password);
            if (!isValid)
                return res.status(404).json({ error: 'Nome de usuário ou seha incorreto' });
            const user = yield userRepository.getUserByName(name);
            const token = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user.id }, server_1.secret, { expiresIn: '1d' });
            return res.status(200).json({ message: 'Usuário logado com sucesso', token });
        });
    }
}
exports.LoginController = LoginController;
