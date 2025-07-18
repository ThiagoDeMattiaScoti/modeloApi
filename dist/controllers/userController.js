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
exports.UserController = void 0;
const userServices_1 = require("../services/userServices");
const userServices = new userServices_1.UserServices();
class UserController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield userServices.getAllUsers(); // Chama o service e passa os valores
            if (!users) {
                return res.status(400).json({ error: 'no users found' }); // Validação se  não existir usuários no banco
            }
            return res.status(200).json(users); //response da API
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body; // Pega o name do body da requisição em JSON
            const user = yield userServices.createUser({ name }); // Chama o service e passa o name como parâmetro
            return res.status(200).json(user); // Envia como retorno da aplicação, o usuário que vai ser retornado quando chamar o service
        });
    }
    // Mesma lógica acima
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const userData = req.body;
            const newUser = yield userServices.updateUserById(id, userData);
            return res.status(200).json(newUser);
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const deletedUser = yield userServices.deleteUserById(id);
            return res.status(200).json({ message: 'User excluded' });
        });
    }
    static getuserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const user = yield userServices.getUserByID(id);
            return res.status(200).json(user);
        });
    }
}
exports.UserController = UserController;
