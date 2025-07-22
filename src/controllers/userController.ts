import { UserServices } from "../services/userServices";
import {Request, Response} from 'express'

export class UserController {

    constructor(private userServices: UserServices) {}

   async getAll(req: Request, res: Response) { //método que faza requisição da API
        const {
            search,
            take,
            skip
        } = req.query

        const users = await this.userServices.getAllUsers(String(search) || '', Number(take) || 10, Number(skip) || 0) // Chama o service e passa os valores

        if (!users) {
            return res.status(400).json({error: 'no users found'}) // Validação se  não existir usuários no banco
        }

        return res.status(200).json(users) //response da API
    }

    async createUser(req: Request, res: Response): Promise<Response>{ // Método que faz a requisição de criar para a API
        const {name, password} = req.body // Pega o name do body da requisição em JSON

        const user = await this.userServices.createUser({name, password}) // Chama o service e passa o name como parâmetro
        return res.status(201).json(user) // Envia como retorno da aplicação, o usuário que vai ser retornado quando chamar o service
    }

// Mesma lógica acima

    async updateUser(req: Request, res: Response){
        const id: number = req.userId
        const userData: {
            name: string
        } = req.body

        const newUser = await this.userServices.updateUserById(id, userData)

        return res.status(200).json({newUser})
    }

    async deleteUser(req: Request, res: Response){
        const id: number = Number(req.params.id)

        const deletedUser = await this.userServices.deleteUserById(id)

        return res.status(200).json({message: 'User excluded'})
    }

    async getuserById(req: Request, res: Response){
        const id: number = Number(req.params.id)

        const user = await this.userServices.getUserByID(id)

        return res.status(200).json(user)
    }
}