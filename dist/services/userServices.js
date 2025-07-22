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
exports.UserServices = void 0;
class UserServices {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAllUsers(search, take, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getAll(search, take, skip);
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.createUser(data); // Por vez, vai chamar esse médoto do repository passando os parâmetros necessários (tudo a mesma lógica abaixo)
        });
    }
    updateUserById(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.updateUser(id, userData);
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.deleteUser(id);
        });
    }
    getUserByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getUserById(id);
        });
    }
    getUserByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getUserByName(name);
        });
    }
}
exports.UserServices = UserServices;
