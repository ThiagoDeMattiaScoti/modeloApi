import { Router } from "express";
import { UserController } from "../controllers/userController";
import { ProductController } from "../controllers/productController";

const router = Router()

router.get('/user', UserController.getAll)
router.get('/user/:id', UserController.getuserById)
router.post('/user', UserController.createUser)
router.put('/user/:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

export default router //pela nomenclatura user.routes.ts,  ele cria um userRoutes para importar no app.ts 