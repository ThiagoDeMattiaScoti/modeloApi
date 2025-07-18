import { Prisma } from "@prisma/client";
import prisma from "../config/prisma";
import { Product } from "../models/productModel";

export class ProductRepostory {
    async getAll(search: string, take: number, skip: number): Promise<Product[]>{
        return await prisma.products.findMany({
            where: {
                description: {
                    contains:String(search),
                    mode: 'insensitive'
                }
            },
            take: Number(take),
            skip: Number(skip)
        })
    }

    async createProduct(data: {description: string, value: number}): Promise<Product>{
        return await prisma.products.create({
            data: {
                description: data.description,
                value: data.value
            }
        })
    }

    async updateProduct(id: number, productData: Prisma.productsUpdateInput) {
        return await prisma.products.update({
            where: {
                id
            },
            data: productData,
        });
    }

    async deleteProduct(id: number){
        return await prisma.products.delete({
            where: {
                id
            }
        })
    }

    async getProductById(id: number){
        return await prisma.products.findUnique({
            where: {
                id
            }
        })
    }
}