"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salesController_1 = require("../controllers/salesController");
const router = (0, express_1.Router)();
router.get('/sales', salesController_1.SalesController.getAllSales);
router.get('/sales/:id', salesController_1.SalesController.getSaleById);
router.post('/sales', salesController_1.SalesController.createSale);
exports.default = router;
