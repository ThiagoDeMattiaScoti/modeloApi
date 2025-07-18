import { Prisma } from "@prisma/client";
import { User } from "../models/userModel";
import { UserRepository } from "../repositories/userRepository";


export class UserServices {
private userRepostory = new UserRepository()

    getAllUsers(){ //método que vai ser chamado quando o controller solictar
        return this.userRepostory.getAll()
    }

    createUser(data: {name: string, password: string}): void{ // Método que vai ser chamado quando o controller solicitar
        this.userRepostory.createUser(data) // Por vez, vai chamar esse médoto do repository passando os parâmetros necessários (tudo a mesma lógica abaixo)
    }

    updateUserById(id: number, userData: Prisma.usersUpdateInput){
        return this.userRepostory.updateUser(id, userData)
    }

    deleteUserById(id: number){
        return this.userRepostory.deleteUser(id)
    }

    getUserByID(id: number){
        return this.userRepostory.getUserById(id)
    }
}