import { Prisma } from "@prisma/client";
import { UserRepository } from "../repositories/userRepository";


export class UserServices {

    constructor(private userRepository: UserRepository) {}

    async getAllUsers(){ //método que vai ser chamado quando o controller solictar
        return await this.userRepository.getAll()
    }

    async createUser(data: {name: string, password: string}){ // Método que vai ser chamado quando o controller solicitar
        return await this.userRepository.createUser(data) // Por vez, vai chamar esse médoto do repository passando os parâmetros necessários (tudo a mesma lógica abaixo)
    }

    async updateUserById(id: number, userData: Prisma.usersUpdateInput){
        return await this.userRepository.updateUser(id, userData)
    }

    async deleteUserById(id: number){
        return await this.userRepository.deleteUser(id)
    }

    async getUserByID(id: number){
        return await this.userRepository.getUserById(id)
    }

    async getUserByName(name: string){
        return await this.userRepository.getUserByName(name)
    }
}