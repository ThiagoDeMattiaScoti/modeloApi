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
}