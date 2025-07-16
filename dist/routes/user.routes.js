"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/user', userController_1.UserController.getAll);
exports.default = router; //pela nomenclatura user.routes.ts,  ele cria um userRoutes para importar no app.ts
