import { SalesServices } from "../services/salesServices";
import {Request, Response} from "express"

const salesServices = new SalesServices
export class SalesController{
    static async getAllSales(req: Request, res: Response){
        const sales = await salesServices.getAllSales()
        return res.status(200).json(sales)
    }

    static async getSaleById(req: Request, res: Response){
        const {id} = req.params

        const sale = await salesServices.getSaleById(Number(id))

        return res.status(200).json(sale)
    }

    static async createSale(req: Request, res: Response){
        const {costumerId, productData} = req.body

        const newSale = await salesServices.createSale(costumerId, productData)

        return res.status(201).json(newSale)
    }
}