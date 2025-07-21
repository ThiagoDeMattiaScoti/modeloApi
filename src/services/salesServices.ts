import { SalesRepository } from "../repositories/salesRepository";

interface ProductOrderItem {
    productId: number,
    quantity: number
}

export class SalesServices{
    constructor(private salesRepository: SalesRepository) {}

    async getAllSales(){
        return await this.salesRepository.getAllSales()
    }

    async getSaleById(id: number){
        return await this.salesRepository.getSaleById(id)
    }

    async createSale(costumerId: number, products: ProductOrderItem[]){
        return await this.salesRepository.createSale(costumerId, products)
    }
}