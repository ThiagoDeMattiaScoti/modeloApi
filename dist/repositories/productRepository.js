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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepostory = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class ProductRepostory {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.products.findMany();
        });
    }
    createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.products.create({
                data: {
                    description: data.description,
                    value: data.value
                }
            });
        });
    }
    updateProduct(id, productData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.products.update({
                where: {
                    id
                },
                data: productData,
            });
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.products.delete({
                where: {
                    id
                }
            });
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.products.findUnique({
                where: {
                    id
                }
            });
        });
    }
}
exports.ProductRepostory = ProductRepostory;
