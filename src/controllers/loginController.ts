import {Request, Response} from 'express'
import { LoginServices } from "../services/loginServices"

const loginServices = new LoginServices

export class LoginController {

    static async validateLogin(req: Request, res: Response){
        const {name, password} = req.body
        const data: {
            name: string,
            password: string
        } = {name, password}
        const isValid = await loginServices.validateLogin(data)

        if (!isValid) return res.status(404).json({error: 'Nome de usuário ou seha incorreto'})
        return res.status(200).json({message: 'Usuário logado com sucesso'})
    }
}