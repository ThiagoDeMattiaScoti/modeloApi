import { Router } from "express";
import { UserController } from "../controllers/userController";
import { UserServices } from "../services/userServices";
import { UserRepository } from "../repositories/userRepository";
import authJwt from "../middlewares/validateJwtToken";

const router = Router()

const userRepository = new UserRepository()
const userServices = new UserServices(userRepository)
const userController = new UserController(userServices)

router.get('/user', (req, res) => userController.getAll(req, res)) // Cria a rota HTTP para ser chamada, assim que chamada, chama o controller (Mesma lógica abaixo)
router.get('/user/:id', (req, res) => userController.getuserById(req, res))
router.post('/user', (req, res) => userController.createUser(req, res))
router.put('/user/', authJwt, (req, res) => userController.updateUser(req, res))
router.delete('/user/:id', (req, res) => userController.deleteUser(req, res))

export default router //pela nomenclatura user.routes.ts,  ele cria um userRoutes para importar no app.ts 