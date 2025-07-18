import prisma from "../config/prisma";
import { User } from "../models/userModel";
import { Prisma } from "@prisma/client";

export class UserRepository {
    async getAll(): Promise<User[]>{ // método que retorna a tabela total
        return await prisma.users.findMany() //Faz o prisma buscar tudo
    }

    async createUser(data: {name: string}): Promise<void>{
        await prisma.users.create({
            data:{name: data.name}
        })
    }

    async updateUser(id: number, userData: Prisma.usersUpdateInput){
        return await prisma.users.update({
            where: {
                id
            },
            data: userData
        });
    }
}