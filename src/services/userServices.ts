import { User } from "../models/userModel";
import { UserRepository } from "../repositories/userRepository";


export class UserServices {
private userRepostory = new UserRepository()

    getAllUsers(): Promise<User[]>{ //método que vai ser chamado quando o controller solictar
        return this.userRepostory.getAll()
    }

    createUser(data: {name: string}): void{
        this.userRepostory.createUser(data)
    }
}