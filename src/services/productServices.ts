import { Product } from "../models/productModel";
import { ProductRepostory } from "../repositories/productRepository";
import { Prisma } from "@prisma/client";

export class ProductServices {
private productRepository = new ProductRepostory

    getAllProducts(): Promise<Product[]>{
        return this.productRepository.getAll()
    }

    createProduct(data: {description: string, value: number}) {
        this.productRepository.createProduct(data)
    }

    updateAllProducts(id: number, productData: Prisma.productsUpdateInput){
        return this.productRepository.updateProduct(id, productData)
    }
}