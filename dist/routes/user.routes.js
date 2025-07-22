"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userServices_1 = require("../services/userServices");
const userRepository_1 = require("../repositories/userRepository");
const validateJwtToken_1 = __importDefault(require("../middlewares/validateJwtToken"));
const router = (0, express_1.Router)();
const userRepository = new userRepository_1.UserRepository();
const userServices = new userServices_1.UserServices(userRepository);
const userController = new userController_1.UserController(userServices);
router.get('/user', (req, res) => userController.getAll(req, res)); // Cria a rota HTTP para ser chamada, assim que chamada, chama o controller (Mesma lógica abaixo)
router.get('/user/:id', (req, res) => userController.getuserById(req, res));
router.post('/user', (req, res) => userController.createUser(req, res));
router.put('/user/', validateJwtToken_1.default, (req, res) => userController.updateUser(req, res));
router.delete('/user/:id', (req, res) => userController.deleteUser(req, res));
exports.default = router; //pela nomenclatura user.routes.ts,  ele cria um userRoutes para importar no app.ts 
