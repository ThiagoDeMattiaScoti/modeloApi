import { Prisma } from "@prisma/client";
import prisma from "../config/prisma";

export class SalesRepository {
    async getAllSales(){
        const sales = await prisma.sales.findMany()
        return sales
    }

    async createSale(){
        
    }
}