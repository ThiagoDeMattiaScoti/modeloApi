import { Router } from "express";
import { ProductController } from "../controllers/productController";

const router = Router()

router.get('/product', ProductController.getAll)
router.post('/product', ProductController.createProduct)
router.put('/product/:id', ProductController.updateProduct)

export default router