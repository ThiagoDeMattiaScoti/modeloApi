import { User } from "../models/userModel";
import { UserServices } from "../services/userServices";
import {Request, Response} from 'express'

const userServices = new UserServices()

export class UserController {
    static async getAll(req: Request, res: Response) { //método que faza requisição da API
        const users = await userServices.getAllUsers() // Chama o service e passa os valores

        if (!users) {
            return res.status(400).json({error: 'no users found'}) // Validação se  não existir usuários no banco
        }

        return res.status(200).json(users) //response da API
    }

    static async createUser(req: Request, res: Response): Promise<Response>{ // Método que faz a requisição de criar para a API
        const {name, password} = req.body // Pega o name do body da requisição em JSON

        const user = await userServices.createUser({name, password}) // Chama o service e passa o name como parâmetro
        return res.status(200).json(user) // Envia como retorno da aplicação, o usuário que vai ser retornado quando chamar o service
    }

// Mesma lógica acima

    static async updateUser(req: Request, res: Response){
        const id: number = Number(req.params.id)

        const userData: {
            name: string
        } = req.body

        const newUser = await userServices.updateUserById(id, userData)

        return res.status(200).json(newUser)
    }

    static async deleteUser(req: Request, res: Response){
        const id: number = Number(req.params.id)

        const deletedUser = await userServices.deleteUserById(id)

        return res.status(200).json({message: 'User excluded'})
    }

    static async getuserById(req: Request, res: Response){
        const id: number = Number(req.params.id)

        const user = await userServices.getUserByID(id)

        return res.status(200).json(user)
    }
}