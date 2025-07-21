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
exports.ProductController = void 0;
const productServices_1 = require("../services/productServices");
const productServices = new productServices_1.ProductServices;
class ProductController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search, take, skip } = req.query;
            const products = yield productServices.getAllProducts(String(search) || '', Number(take) || 10, Number(skip) || 0);
            return res.status(200).json({ products });
        });
    }
    static createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description, value } = req.body;
            const product = yield productServices.createProduct({ description, value });
            return res.status(201).json(product);
        });
    }
    static updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const productData = req.body;
            const productUpdate = yield productServices.updateAllProducts(id, productData);
            return res.status(200).json(productData);
        });
    }
    static deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const deletedUser = yield productServices.deleteProductById(id);
            return res.status(200).json({ message: 'Product excluded' });
        });
    }
    static getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const product = yield productServices.getProductById(id);
            return res.status(200).json(product);
        });
    }
}
exports.ProductController = ProductController;
