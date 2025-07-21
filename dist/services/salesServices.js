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
exports.SalesServices = void 0;
const salesRepository_1 = require("../repositories/salesRepository");
class SalesServices {
    constructor() {
        this.salesRepository = new salesRepository_1.SalesRepository;
    }
    getAllSales() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.salesRepository.getAllSales();
        });
    }
    getSaleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.salesRepository.getSaleById(id);
        });
    }
    createSale(costumerId, products) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.salesRepository.createSale(costumerId, products);
        });
    }
}
exports.SalesServices = SalesServices;
