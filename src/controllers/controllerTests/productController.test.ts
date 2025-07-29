import { Request, Response } from "express";
import { ProductController } from "../productController";
import { ProductServices } from "../../services/productServices";
import { ProductRepostory } from "../../repositories/productRepository";

const productRepository = new ProductRepostory()
const productServices = new ProductServices(productRepository)
const productController = new ProductController(productServices)

jest.mock('../../repositories/productRepository')

describe('Product Controller', () =>{
    describe('Rota HTTP GET', () =>{
        test('GET feito corretamente', async () =>{
            const req = {
                query: {
                    search: 'a',
                    take: 10,
                    skip: 0
                }
            } as unknown as Request

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response

            const mockProducts = [
                {id: 1, descripton: 'Lapis', value: 1},
                {id: 2, description: 'Mop', value: 100}
            ];
            (productRepository.getAll as jest.Mock).mockResolvedValue(mockProducts)

            await productController.getAll(req, res)
            
            expect(productRepository.getAll).toHaveBeenCalledTimes(1)
            expect(productRepository.getAll).toHaveBeenCalledWith('a', 10, 0)
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith(mockProducts)
        })
    })
})