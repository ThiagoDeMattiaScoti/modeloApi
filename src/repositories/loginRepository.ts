import { validatePassword } from "../middlewares/passwordHashing";

export class LogiRepository {
    async login(name: string, password: string): Promise<boolean>{
        const isPasswordValid: boolean = await validatePassword(name, password)
        return isPasswordValid
    }
}