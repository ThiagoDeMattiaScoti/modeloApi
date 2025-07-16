import { Product } from "../models/productModel";
import { ProductRepostory } from "../repositories/productRepository";

export class ProductServices {
private productRepository = new ProductRepostory

    getAllProducts(): Promise<Product[]>{
        return this.productRepository.getAll()
    }

    createProduct(data: {description: string, value: number}) {
        this.productRepository.createProduct(data)
    }
}