import { Router } from "express";
import { UserController } from "../controllers/userController";
import { ProductController } from "../controllers/productController";

const router = Router()

router.get('/user', UserController.getAll)
router.post('/user', UserController.createUser)

router.get('/product', ProductController.getAll)
router.post('/product', ProductController.createProduct)

export default router //pela nomenclatura user.routes.ts,  ele cria um userRoutes para importar no app.ts 