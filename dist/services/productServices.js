"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const productRepository_1 = require("../repositories/productRepository");
class ProductServices {
    constructor() {
        this.productRepository = new productRepository_1.ProductRepostory;
    }
    getAllProducts(search, take, skip) {
        return this.productRepository.getAll(search, take, skip);
    }
    createProduct(data) {
        this.productRepository.createProduct(data);
    }
    updateAllProducts(id, productData) {
        return this.productRepository.updateProduct(id, productData);
    }
    deleteProductById(id) {
        return this.productRepository.deleteProduct(id);
    }
    getProductById(id) {
        return this.productRepository.getProductById(id);
    }
}
exports.ProductServices = ProductServices;
