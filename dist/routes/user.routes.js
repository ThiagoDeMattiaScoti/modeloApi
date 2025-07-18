"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/user', userController_1.UserController.getAll); // Cria a rota HTTP para ser chamada, assim que chamada, chama o controller (Mesma lógica abaixo)
router.get('/user/:id', userController_1.UserController.getuserById);
router.post('/user', userController_1.UserController.createUser);
router.put('/user/:id', userController_1.UserController.updateUser);
router.delete('/user/:id', userController_1.UserController.deleteUser);
exports.default = router; //pela nomenclatura user.routes.ts,  ele cria um userRoutes para importar no app.ts 
