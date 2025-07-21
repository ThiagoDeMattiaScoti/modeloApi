import { LogiRepository } from "../repositories/loginRepository";

export class LoginServices{
    private loginRepository = new LogiRepository

    async validateLogin(name:string, password: string): Promise<boolean>{
        return await this.loginRepository.login(name, password)
    }
}