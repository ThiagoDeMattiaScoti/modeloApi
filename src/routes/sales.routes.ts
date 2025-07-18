import {Router} from "express";
import { SalesController } from "../controllers/salesController";

const router = Router()

router.get('/sales', SalesController.getAllSales)

export default router