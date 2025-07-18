import { Product } from "../models/productModel";
import { ProductRepostory } from "../repositories/productRepository";
import { Prisma } from "@prisma/client";

export class ProductServices {
private productRepository = new ProductRepostory

    getAllProducts(search: string, take: number, skip: number): Promise<Product[]>{
        return this.productRepository.getAll(search, take, skip)
    }

    createProduct(data: {description: string, value: number}) {
        this.productRepository.createProduct(data)
    }

    updateAllProducts(id: number, productData: Prisma.productsUpdateInput){
        return this.productRepository.updateProduct(id, productData)
    }

    deleteProductById(id: number){
        return this.productRepository.deleteProduct(id)
    }

    getProductById(id: number){
        return this.productRepository.getProductById(id)
    }
}