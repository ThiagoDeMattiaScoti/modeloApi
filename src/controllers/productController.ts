import { Product } from "../models/productModel";
import { ProductServices } from "../services/productServices";
import {Request, Response} from 'express'

const productServices = new ProductServices

export class ProductController {
    static async getAll(req: Request, res: Response){
        const {
            search,
            take,
            skip
        } = req.query
        const products: Product[] = await productServices.getAllProducts(String(search) || '', Number(take) || 10, Number(skip) || 0)

        return res.status(200).json({products})
    }

    static async createProduct(req: Request, res: Response){
        const {description, value} = req.body

        const product = await productServices.createProduct({description, value})

        return res.status(201).json(product)
    }

    static async updateProduct(req: Request, res: Response){
        const id: number = Number(req.params.id)
        const productData: {
            description: string,
            value: number 
        } = req.body

        const productUpdate = await productServices.updateAllProducts(id, productData)

        return res.status(200).json(productData)
    }

    static async deleteProduct(req: Request, res: Response){
        const id: number = Number(req.params.id)

        const deletedUser = await productServices.deleteProductById(id)

        return res.status(200).json({message: 'Product excluded'})
    }

    static async getProductById(req: Request, res: Response){
        const id: number= Number(req.params.id)

        const product= await productServices.getProductById(id)


        return res.status(200).json(product)
    }
}