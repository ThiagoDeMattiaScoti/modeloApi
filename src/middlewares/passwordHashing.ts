import bcrypt from 'bcrypt'
import { UserRepository } from '../repositories/userRepository'

export async function hashPaswword(password: string, salt: number): Promise<string>{
    try {
        const hash = await bcrypt.hash(password, salt)
        return hash
    } catch (err){
        console.log('Ocorreu um erro na geração do hash de senha', err)
        throw new Error('Ocorreu um erro na geração do hash de senha')
    }
}

export async function validatePassword(name: string, password: string): Promise<boolean>{
    const userRepository = new UserRepository
    const user = await userRepository.getUserByName(name)
    if (!user) return false
    if (!user.password) return false

    try{
        const isValid = await bcrypt.compare(password, user.password)
        return isValid
    } catch(err){
        return false
    }
}