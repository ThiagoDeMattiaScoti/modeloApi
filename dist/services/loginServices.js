"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginServices = void 0;
const loginRepository_1 = require("../repositories/loginRepository");
class LoginServices {
    constructor() {
        this.loginRepository = new loginRepository_1.LogiRepository;
    }
    validateLogin(data) {
        return this.loginRepository.login(data);
    }
}
exports.LoginServices = LoginServices;
