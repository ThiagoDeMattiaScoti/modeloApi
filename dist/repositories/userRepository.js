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
exports.UserRepository = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class UserRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.users.findMany(); //Faz o prisma buscar tudo
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.users.create({
                data: { name: data.name } //  Valores que tem que receber para o prisma criar o valor
            });
        });
    }
    updateUser(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.users.update({
                where: {
                    id // Faz o prisma validar pelo ID
                },
                data: userData // Novos dados da row da tabela
            });
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.users.delete({
                where: {
                    id // Faz o prisma validar qual row excluir pelo ID
                }
            });
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.users.findUnique({
                where: {
                    id // Faz o prisma validar a busca pelo ID
                }
            });
        });
    }
}
exports.UserRepository = UserRepository;
