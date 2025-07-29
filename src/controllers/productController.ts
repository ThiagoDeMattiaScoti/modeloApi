import { Product } from "../models/productModel";
import { ProductServices } from "../services/productServices";
import {Request, Response} from 'express'

export class ProductController {
    constructor(private productServices: ProductServices){}

    async getAll(req: Request, res: Response){
        const {
            search,
            take,
            skip
        } = req.query
        const products: Product[] = await this.productServices.getAllProducts(String(search) || '', Number(take) || 10, Number(skip) || 0)
        return res.status(200).json(products)
    }

    async createProduct(req: Request, res: Response){
        const {description, value} = req.body

        const product = await this.productServices.createProduct({description, value})

        return res.status(201).json(product)
    }

    async updateProduct(req: Request, res: Response){
        const id: number = Number(req.params.id)
        const productData: {
            description: string,
            value: number 
        } = req.body

        const productUpdate = await this.productServices.updateAllProducts(id, productData)

        return res.status(200).json(productData)
    }

    async deleteProduct(req: Request, res: Response){
        const id: number = Number(req.params.id)

        const deletedUser = await this.productServices.deleteProductById(id)

        return res.status(200).json({message: 'Product excluded'})
    }

    async getProductById(req: Request, res: Response){
        const id: number= Number(req.params.id)

        const product= await this.productServices.getProductById(id)


        return res.status(200).json(product)
    }
}