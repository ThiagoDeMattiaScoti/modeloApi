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
exports.SalesRepository = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class SalesRepository {
    getAllSales() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.sales.findMany();
        });
    }
    getSaleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sale = yield prisma_1.default.sales.findFirst({
                where: {
                    id
                }
            });
            const saleItems = yield prisma_1.default.saleItems.findMany({
                where: {
                    saleId: id
                },
                include: {
                    product: {
                        select: {
                            description: true
                        }
                    }
                }
            });
            return { sale, saleItems };
        });
    }
    createSale(costumerId, itemsData) {
        return __awaiter(this, void 0, void 0, function* () {
            const productsIds = itemsData.map(item => item.productId); //Retornou os IDs dos produtos somente
            const existentProducts = yield prisma_1.default.products.findMany({
                where: {
                    id: { in: productsIds }
                }
            });
            let totalSale = 0;
            const saleItems = itemsData.map(item => {
                const findedProduct = existentProducts.find(product => product.id === item.productId); //Coloca o produto do existentProducts (consultado no momento) como o item no nov array
                const unitValue = (findedProduct === null || findedProduct === void 0 ? void 0 : findedProduct.value) || 0; //Valor unitario de cada produto
                const subtotal = unitValue * item.quantity; //Subtotal do produto
                totalSale += subtotal;
                return {
                    product: { connect: { id: item.productId } },
                    quantity: item.quantity,
                    priceAtSale: unitValue
                };
            });
            const newSale = yield prisma_1.default.$transaction((prismaTx) => __awaiter(this, void 0, void 0, function* () {
                const sale = yield prismaTx.sales.create({
                    data: {
                        client: costumerId ? { connect: { id: costumerId } } : undefined,
                        totalValue: totalSale,
                        items: {
                            create: saleItems
                        }
                    },
                    include: {
                        items: {
                            include: {
                                product: {
                                    select: {
                                        description: true
                                    }
                                }
                            }
                        },
                        client: {
                            select: {
                                id: true,
                                name: true,
                                password: false
                            }
                        }
                    }
                });
                return sale;
            }));
            return newSale;
        });
    }
}
exports.SalesRepository = SalesRepository;
