import {Request, Response} from 'express'
import { LoginServices } from "../services/loginServices"
import { UserRepository } from '../repositories/userRepository'
import jwt from 'jsonwebtoken'
import { secret } from '../server'

const loginServices = new LoginServices
const userRepository = new UserRepository

export class LoginController {

    static async validateLogin(req: Request, res: Response){
        const {name, password} = req.body
        const isValid: boolean = await loginServices.validateLogin(name, password)
        if (!isValid) return res.status(404).json({error: 'Nome de usuário ou seha incorreto'})
        const user = await userRepository.getUserByName(name) 
        const token = jwt.sign({id: user?.id}, secret, {expiresIn: '1d'})
        return res.status(200).json({message: 'Usuário logado com sucesso', token})
    }
}