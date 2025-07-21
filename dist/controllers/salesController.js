"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesController = void 0;
const salesServices_1 = require("../services/salesServices");
const salesServices = new salesServices_1.SalesServices;
class SalesController {
    static getAllSales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sales = yield salesServices.getAllSales();
            return res.status(200).json(sales);
        });
    }
    static getSaleById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const sale = yield salesServices.getSaleById(Number(id));
            return res.status(200).json(sale);
        });
    }
    static createSale(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { costumerId, productData } = req.body;
            const newSale = yield salesServices.createSale(costumerId, productData);
            return res.status(201).json(newSale);
        });
    }
}
exports.SalesController = SalesController;
