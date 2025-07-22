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
class UserController {
    constructor(userServices) {
        this.userServices = userServices;
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search, take, skip } = req.query;
            const users = yield this.userServices.getAllUsers(String(search) || '', Number(take) || 10, Number(skip) || 0); // Chama o service e passa os valores
            return res.status(200).json(users); //response da API
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, password } = req.body; // Pega o name do body da requisição em JSON
            if (!name || !password)
                return res.status(400).json({ message: 'É necessário informar um nome e senha' });
            const user = yield this.userServices.createUser({ name, password }); // Chama o service e passa o name como parâmetro
            return res.status(201).json(user); // Envia como retorno da aplicação, o usuário que vai ser retornado quando chamar o service
        });
    }
    // Mesma lógica acima
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.userId;
            const userData = req.body;
            if (!id || !userData.name)
                return res.status(400).json({ message: "É necessário informar token e novo nome" });
            const newUser = yield this.userServices.updateUserById(id, userData);
            return res.status(200).json({ newUser });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (!id)
                return res.status(400).json({ message: "Sem id defnido para excluir" });
            const deletedUser = yield this.userServices.deleteUserById(id);
            return res.status(200).json({ message: 'User excluded' });
        });
    }
    getuserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const user = yield this.userServices.getUserByID(id);
            return res.status(200).json(user);
        });
    }
}
exports.UserController = UserController;
