import prisma from "../config/prisma";
import { Product } from "../models/productModel";

export class ProductRepostory {
    async getAll(): Promise<Product[]>{
        return await prisma.products.findMany()
    }

    async createProduct(data: {description: string, value: number}): Promise<Product>{
        return await prisma.products.create({
            data: {
                description: data.description,
                value: data.value
            }
        })
    }
}