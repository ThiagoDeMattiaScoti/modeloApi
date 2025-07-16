import { Router } from "express";
import { ProductController } from "../controllers/productController";

const router = Router()

router.get('/product', ProductController.getAll)
router.post('/product', ProductController.createProduct)

export default router