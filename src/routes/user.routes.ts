import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router()

router.get('/user', UserController.getAll) // Cria a rota HTTP para ser chamada, assim que chamada, chama o controller (Mesma lógica abaixo)
router.get('/user/:id', UserController.getuserById)
router.post('/user', UserController.createUser)
router.put('/user/:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

export default router //pela nomenclatura user.routes.ts,  ele cria um userRoutes para importar no app.ts 