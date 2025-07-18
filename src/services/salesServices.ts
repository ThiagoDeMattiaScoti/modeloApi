import { SalesRepository } from "../repositories/salesRepository";

export class SalesServices{
    private salesRepository = new SalesRepository

    async getAllSales(){
        return this.salesRepository.getAllSales()
    }
}