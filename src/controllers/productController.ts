import { Product } from "../models/productModel";
import { ProductServices } from "../services/productServices";
import {Request, Response} from 'express'

const productServices = new ProductServices

export class ProductController {
    static async getAll(req: Request, res: Response){
        const products: Product[] = await productServices.getAllProducts()

        return res.status(200).json({products})
    }

    static async createProduct(req: Request, res: Response){
        const {description, value} = req.body

        const product = await productServices.createProduct({description, value})

        return res.status(201).json(product)
    }

}