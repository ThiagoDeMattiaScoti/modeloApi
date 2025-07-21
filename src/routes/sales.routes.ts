import {Router} from "express";
import { SalesController } from "../controllers/salesController";
import { SalesServices } from "../services/salesServices";
import { SalesRepository } from "../repositories/salesRepository";

const router = Router()

const salesRepository = new SalesRepository
const salesServices = new SalesServices(salesRepository)
const salesController = new SalesController(salesServices)

router.get('/sales', (req, res) => salesController.getAllSales(req, res))
router.get('/sales/:id', (req, res) => salesController.getSaleById(req, res))
router.post('/sales', (req, res) => salesController.createSale(req, res))

export default router