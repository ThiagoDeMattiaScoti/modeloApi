import prisma from "../config/prisma";
import { User } from "../models/userModel";
import { Prisma } from "@prisma/client";

export class UserRepository {
    async getAll(): Promise<User[]>{ // método que retorna a tabela total
        return await prisma.users.findMany() //Faz o prisma buscar tudo
    }

    async createUser(data: {name: string}): Promise<void>{ // Método que cria um novo valor na tabela
        await prisma.users.create({ // Faz o prisma criar um valor na tabela
            data:{name: data.name} //  Valores que tem que receber para o prisma criar o valor
        })
    }

    async updateUser(id: number, userData: Prisma.usersUpdateInput){ // Método que atualiza um valor na tabela
        return await prisma.users.update({ // Faz o prisma atualizar um valor na tabela
            where: {
                id // Faz o prisma validar pelo ID
            },
            data: userData // Novos dados da row da tabela
        });
    }

    async deleteUser(id: number){ // Método que edleta um valor da tabela
        return await prisma.users.delete({ // Faz o prisma excluir um valor da tabela
            where: {
                id // Faz o prisma validar qual row excluir pelo ID
            }
        })
    }

    async getUserById(id: number){ // Método que retorna somente UM objeto usuário
        return await prisma.users.findUnique({ // Faz o prisma buscar por um valor na tabela
            where: {
                id // Faz o prisma validar a busca pelo ID
            }
        })
    }
}