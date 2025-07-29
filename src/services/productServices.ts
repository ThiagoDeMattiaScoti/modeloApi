import { Product } from "../models/productModel";
import { ProductRepostory } from "../repositories/productRepository";
import { Prisma } from "@prisma/client";

export class ProductServices {

    constructor(private productRepository: ProductRepostory){}

    async getAllProducts(search: string, take: number, skip: number): Promise<Product[]>{
        return await this.productRepository.getAll(search, take, skip)
    }

    async createProduct(data: {description: string, value: number}) {
        await this.productRepository.createProduct(data)
    }

    async updateAllProducts(id: number, productData: Prisma.productsUpdateInput){
        return await this.productRepository.updateProduct(id, productData)
    }

    async deleteProductById(id: number){
        return await this.productRepository.deleteProduct(id)
    }

    async getProductById(id: number){
        return await this.productRepository.getProductById(id)
    }
}