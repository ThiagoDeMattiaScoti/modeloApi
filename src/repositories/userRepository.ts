import prisma from "../config/prisma";
import { hashPaswword } from "../middlewares/passwordHashing";
import { Prisma } from "@prisma/client";

export class UserRepository {
    async getAll(){ // método que retorna a tabela total
        const users = await prisma.users.findMany({select: {id: true, name: true}}) //Faz o prisma buscar tudo
        return users
    }

    async createUser(data: {name: string, password: string}): Promise<void>{ // Método que cria um novo valor na tabela
        const saltRounds = 10
        const hashedPassword = await hashPaswword(data.password, saltRounds)


        await prisma.users.create({ // Faz o prisma criar um valor na tabela
            data:{name: data.name, password: hashedPassword} //  Valores que tem que receber para o prisma criar o valor
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

    async getUserByName(name: string){
        const user = await prisma.users.findUnique({
            where: {
                name
            }
        })

        return user
    }
}