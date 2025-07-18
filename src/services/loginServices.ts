import { LogiRepository } from "../repositories/loginRepository";

export class LoginServices{
    private loginRepository = new LogiRepository

    validateLogin(data: {name:string, password: string}){
        return this.loginRepository.login(data)
    }
}