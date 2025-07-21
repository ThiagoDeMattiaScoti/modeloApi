import { SalesRepository } from "../repositories/salesRepository";

interface ProductOrderItem {
    productId: number,
    quantity: number
}

export class SalesServices{
    private salesRepository = new SalesRepository

    async getAllSales(){
        return this.salesRepository.getAllSales()
    }

    async createSale(costumerId: number, products: ProductOrderItem[]){
        return this.salesRepository.createSale(costumerId, products)
    }
}