import { UserRepository } from "../../repositories/userRepository"
import { UserServices } from "../../services/userServices"
import { UserController } from "../userController"
import {Request, Response} from 'express'

const userRepository = new UserRepository
const userService = new UserServices(userRepository)
const userController = new UserController(userService)

jest.mock('../../repositories/userRepository')

describe('User controller', () => {
    describe('Rota HTTP GET', ()=>{
        test('GET feito corretamente', async () =>{
            const req = {
                query: {
                    search: 'a',
                    take: 10,
                    skip: 0
                }
            } as unknown as Request

            const res= {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response

            const mockUsers = [{id: 1, name: 'Thiago', password: '0'}];
            (userRepository.getAll as jest.Mock).mockResolvedValue(mockUsers)

            await userController.getAll(req, res)

            expect(userRepository.getAll).toHaveBeenCalledTimes(1)
            expect(userRepository.getAll).toHaveBeenCalledWith('a', 10, 0)
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith(mockUsers)
        })

        test('GET feito incorretamente', async () => {
            const req = {
                query: {
                    search: "",
                    take: 10,
                    skip: 0
                }
            } as unknown as Request

            const res= {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response

            const mockUsers = [{}];
            (userRepository.getAll as jest.Mock).mockResolvedValue(mockUsers)

            await userController.getAll(req, res)

            expect(userRepository.getAll).toHaveBeenCalledTimes(1)
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith([{}])
        })
    })
        
    describe('Rota HTTP POST', ()=>{
        test('POST feito corretamente', async ()=>{
            const req = {
                body: {
                    name: "teste unitário",
                    password: "Abc123*&"
                }
            } as unknown as Request

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response

            const mockUser = [{name: "teste unitário", password: "test"}];
            (userRepository.createUser as jest.Mock).mockResolvedValue(mockUser)

            await userController.createUser(req, res)

            expect(userRepository.createUser).toHaveBeenCalledTimes(1)
            expect(userRepository.createUser).toHaveBeenCalledWith({"name": "teste unitário", "password": "Abc123*&"})
            expect(res.status).toHaveBeenCalledWith(201)
            expect(res.json).toHaveBeenCalledWith(mockUser)
        })

        test('POST feito incoretamente', async ()=>{
            const req = {
                body: {
                    name: "Thiago"
                }
            } as unknown as Request

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response

            const mockUser = [{name: "Teste unitário", password: "teste"}];
            (userRepository.createUser as jest.Mock).mockResolvedValue(mockUser)

            await userController.createUser(req, res)

            expect(userRepository.createUser).not.toHaveBeenCalled()
            expect(res.status).toHaveBeenCalledWith(400)
            expect(res.json).toHaveBeenCalledWith({"message": "É necessário informar um nome e senha"})
        })
    })

    describe('Rota HTTP PUT', () => {
        test('PUT feito corretamente', async ()=>{
            const req = {
                userId: 1,
                body: {
                        name: "Thigas"
                }
            } as unknown as Request

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response

            const mockUser = [{id: 1, name: 'tw', password: 'Abc123*&'}];
            (userRepository.updateUser as jest.Mock).mockResolvedValue(mockUser)
            await userController.updateUser(req, res)

            expect(userRepository.updateUser).toHaveBeenCalledTimes(1)
            expect(userRepository.updateUser).toHaveBeenCalledWith(1, {"name": "Thigas"})
            expect(res.status).toHaveBeenCalledWith(200)
        })

        test('PUT feito incorretamente', async () =>{
            const req = {
                body: {
                        name: "Thigas"
                }
            } as unknown as Request

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response

            const mockUser = [{id: 1, name: "tw", password: 'Abc132*&'}];
            (userRepository.updateUser as jest.Mock).mockResolvedValue(mockUser)

            await userController.updateUser(req, res)

            expect(userRepository.updateUser).not.toHaveBeenCalled()
            expect(res.status).toHaveBeenCalledWith(400)
            expect(res.json).toHaveBeenCalledWith({message: "É necessário informar token e novo nome"})
        })
    })

    describe('Rota HTTP DELETE', () => {
        test('DELETE feito corretamente', async ()=>{
            const req = {
                params: {
                    id: 2
                }
            } as unknown as Request

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response

            const mockUser = [{id: 2, name: "Thiago", password: '0'}];
            (userRepository.deleteUser as jest.Mock).mockResolvedValue(mockUser)

            await userController.deleteUser(req, res)

            expect(userRepository.deleteUser).toHaveBeenCalledTimes(1)
            expect(userRepository.deleteUser).toHaveBeenCalledWith(req.params.id)
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith({message: 'User excluded'})
        })

        test('DELETE feito incorretamente', async ()=>{
            const req = {
                params: {
                    
                }
            } as unknown as Request

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response

            const mockUser = [{id: 2, name: 'Thiago', password: '0'}];
            (userRepository.deleteUser as jest.Mock).mockResolvedValue(mockUser)

            await userController.deleteUser(req, res)
            
            expect(userRepository.deleteUser).not.toHaveBeenCalled()
            expect(res.status).toHaveBeenCalledWith(400)
            expect(res.json).toHaveBeenCalledWith({message: "Sem id defnido para excluir"})
        })
    })

})