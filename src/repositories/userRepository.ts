import prisma from "../config/prisma";
import { User } from "../models/userModel";

export class UserRepository {
    async getAll(): Promise<User[]>{ // método que retorna a tabela total
        return await prisma.users.findMany() //Faz o prisma buscar tudo
    }

    async createUser(data: {name: string}): Promise<void>{
        await prisma.users.create({
            data:{name: data.name}
        })
    }
}