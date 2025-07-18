import { User } from "../models/userModel";
import { UserServices } from "../services/userServices";
import {Request, Response} from 'express'

const userServices = new UserServices()

export class UserController {
    static async getAll(req: Request, res: Response) { //método que faza requisição da API
        const users: User[] = await userServices.getAllUsers()

        if (!users) {
            return res.status(400).json({error: 'no users found'})
        }

        return res.status(200).json(users) //response da API
    }

    static async createUser(req: Request, res: Response): Promise<Response>{
        const {name} = req.body

        const user = await userServices.createUser({name})
        return res.status(200).json(user)
    }

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