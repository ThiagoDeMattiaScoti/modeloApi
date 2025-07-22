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
const userRepository_1 = require("../../repositories/userRepository");
const userServices_1 = require("../../services/userServices");
const userController_1 = require("../userController");
const userRepository = new userRepository_1.UserRepository;
const userService = new userServices_1.UserServices(userRepository);
const userController = new userController_1.UserController(userService);
jest.mock('../../repositories/userRepository');
describe('User controller', () => {
    describe('Rota HTTP GET', () => {
        test('GET feito corretamente', () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                query: {
                    search: 'a',
                    take: 10,
                    skip: 0
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const mockUsers = [{ id: 1, name: 'Thiago', password: '0' }];
            userRepository.getAll.mockResolvedValue(mockUsers);
            yield userController.getAll(req, res);
            expect(userRepository.getAll).toHaveBeenCalledTimes(1);
            expect(userRepository.getAll).toHaveBeenCalledWith('a', 10, 0);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockUsers);
        }));
        test('GET feito incorretamente', () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                query: {
                    search: "",
                    take: 10,
                    skip: 0
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const mockUsers = [{}];
            userRepository.getAll.mockResolvedValue(mockUsers);
            yield userController.getAll(req, res);
            expect(userRepository.getAll).toHaveBeenCalledTimes(1);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([{}]);
        }));
    });
    describe('Rota HTTP POST', () => {
        test('POST feito corretamente', () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                body: {
                    name: "teste unitário",
                    password: "test"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const mockUser = [{ name: "teste unitário", password: "test" }];
            userRepository.createUser.mockResolvedValue(mockUser);
            yield userController.createUser(req, res);
            expect(userRepository.createUser).toHaveBeenCalledTimes(1);
            expect(userRepository.createUser).toHaveBeenCalledWith({ "name": "teste unitário", "password": "test" });
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(mockUser);
        }));
        test('POST feito incoretamente', () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                body: {
                    name: "Thiago"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const mockUser = [{ name: "Teste unitário", password: "teste" }];
            userRepository.createUser.mockResolvedValue(mockUser);
            yield userController.createUser(req, res);
            expect(userRepository.createUser).not.toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ "message": "É necessário informar um nome e senha" });
        }));
    });
    describe('Rota HTTP PUT', () => {
        test('PUT feito corretamente', () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                userId: 1,
                body: {
                    name: "Thigas"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const mockUser = [{ id: 1, name: 'tw', password: '0' }];
            userRepository.updateUser.mockResolvedValue(mockUser);
            yield userController.updateUser(req, res);
            expect(userRepository.updateUser).toHaveBeenCalledTimes(1);
            expect(userRepository.updateUser).toHaveBeenCalledWith(1, { "name": "Thigas" });
            expect(res.status).toHaveBeenCalledWith(200);
        }));
        test('PUT feito incorretamente', () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                body: {
                    name: "Thigas"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const mockUser = [{ id: 1, name: "tw", password: '0' }];
            userRepository.updateUser.mockResolvedValue(mockUser);
            yield userController.updateUser(req, res);
            expect(userRepository.updateUser).not.toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: "É necessário informar token e novo nome" });
        }));
    });
    describe('Rota HTTP DELETE', () => {
        test('DELETE feito corretamente', () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                params: {
                    id: 2
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const mockUser = [{ id: 2, name: "Thiago", password: '0' }];
            userRepository.deleteUser.mockResolvedValue(mockUser);
            yield userController.deleteUser(req, res);
            expect(userRepository.deleteUser).toHaveBeenCalledTimes(1);
            expect(userRepository.deleteUser).toHaveBeenCalledWith(req.params.id);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'User excluded' });
        }));
        test('DELETE feito incorretamente', () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                params: {}
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const mockUser = [{ id: 2, name: 'Thiago', password: '0' }];
            userRepository.deleteUser.mockResolvedValue(mockUser);
            yield userController.deleteUser(req, res);
            expect(userRepository.deleteUser).not.toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: "Sem id defnido para excluir" });
        }));
    });
});
