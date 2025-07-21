import prisma from "../config/prisma";

export class SalesRepository {
    async getAllSales(){
        const sales = await prisma.sales.findMany()
        return sales
    }

    async createSale(costumerId: number, itemsData: Array<{productId: number, quantity: number}>){
        const productsIds = itemsData.map(item => item.productId) //Retornou os IDs dos produtos somente
        const existentProducts = await prisma.products.findMany({ //Verifica se os IDs existem no BD
            where: {
                id: {in: productsIds}
            }
        })

        let totalSale = 0
        const saleItems = itemsData.map(item => { // Percorre por cada item dos que o cliente quer e retorna uma coisa (faz um saleItems = [item1, item2...])
            const findedProduct = existentProducts.find(product => product.id === item.productId) //Coloca o produto do existentProducts (consultado no momento) como o item no nov array
            const unitValue = findedProduct?.value || 0 //Valor unitario de cada produto
            const subtotal = unitValue * item.quantity //Subtotal do produto
            totalSale += subtotal

            return { //Retorna para criar um valor no array com [item1] onde o item 1 é -> product: id, quantity: quantidade, unitValue: valor unitário
                product: {connect: {id: item.productId}},
                quantity: item.quantity,
                priceAtSale: unitValue
            }
        })

        const newSale = await prisma.$transaction(async (prismaTx) => {
            const sale = await prismaTx.sales.create({
                data: {
                    client: costumerId? {connect: {id: costumerId}}: undefined,
                    totalValue: totalSale,
                    items: {
                        create: saleItems
                    }
                },
                include: {
                    items: {
                        include: {
                            product: {
                                select: {
                                    description: true
                                }
                            }
                        }
                    },
                    client: {
                        select: {
                            id: true,
                            name: true,
                            password: false
                        }
                    }
                }
            })


            return sale
        })
        
        return newSale
    }
}