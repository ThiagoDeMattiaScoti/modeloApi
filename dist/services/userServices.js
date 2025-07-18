"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const userRepository_1 = require("../repositories/userRepository");
class UserServices {
    constructor() {
        this.userRepostory = new userRepository_1.UserRepository();
    }
    getAllUsers() {
        return this.userRepostory.getAll();
    }
    createUser(data) {
        this.userRepostory.createUser(data); // Por vez, vai chamar esse médoto do repository passando os parâmetros necessários (tudo a mesma lógica abaixo)
    }
    updateUserById(id, userData) {
        return this.userRepostory.updateUser(id, userData);
    }
    deleteUserById(id) {
        return this.userRepostory.deleteUser(id);
    }
    getUserByID(id) {
        return this.userRepostory.getUserById(id);
    }
}
exports.UserServices = UserServices;
