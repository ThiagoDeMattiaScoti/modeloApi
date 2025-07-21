import { User } from "./userModel"

export type saleModel = {
    consumer: User,
    products: string[],
    totalValue: number,
    date: string
}