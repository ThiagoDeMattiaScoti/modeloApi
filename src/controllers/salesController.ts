import { SalesServices } from "../services/salesServices";
import {Request, Response} from "express"

export class SalesController{

    constructor(private salesServices: SalesServices) {}

    async getAllSales(req: Request, res: Response){
        const sales = await this.salesServices.getAllSales()
        return res.status(200).json(sales)
    }

    async getSaleById(req: Request, res: Response){
        const {id} = req.params

        const sale = await this.salesServices.getSaleById(Number(id))

        return res.status(200).json(sale)
    }

    async createSale(req: Request, res: Response){
        const {costumerId, productData} = req.body

        const newSale = await this.salesServices.createSale(costumerId, productData)

        return res.status(201).json(newSale)
    }
}