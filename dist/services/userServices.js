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
}
exports.UserServices = UserServices;
