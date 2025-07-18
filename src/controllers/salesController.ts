import { SalesServices } from "../services/salesServices";
import {Request, Response} from "express"

const salesServices = new SalesServices
export class SalesController{
    static async getAllSales(req: Request, res: Response){
        const sales = salesServices.getAllSales()

        return res.status(200).json(sales)
    }
}