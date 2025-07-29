import { Router } from "express";
import { ProductController } from "../controllers/productController";
import { UserRepository } from "../repositories/userRepository";
import { ProductRepostory } from "../repositories/productRepository";
import { ProductServices } from "../services/productServices";

const router = Router()

const productRepository = new ProductRepostory()
const productServices = new ProductServices(productRepository)
const productController = new ProductController(productServices)

router.get('/product', (req, res) => productController.getAll(req, res))
router.get('/product/:id', (req, res) => productController.getProductById(req, res))
router.post('/product', (req, res) => productController.createProduct(req, res))
router.put('/product/:id', (req, res) => productController.updateProduct(req, res))
router.delete('/product/:id', (req, res) => productController.deleteProduct(req, res))

export default router