import { validatePassword } from "../middlewares/passwordHashing";

export class LogiRepository {
    async login(data: {name: string, password: string}){
        const isPasswordValid = await validatePassword(data.name, data.password)
        return isPasswordValid
    }
}