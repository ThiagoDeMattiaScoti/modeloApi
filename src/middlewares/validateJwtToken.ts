import {Request, Response, NextFunction} from 'express'

import jwt from 'jsonwebtoken'
import { secret } from '../server'

interface TokenPayload {
    id:  number,
    iat: number,
    exp: number
}

export default function authJwt(req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers

    if (!authorization) return res.send(401).json({messae: 'Sem token informado'})

        const token = authorization.replace('Bearer', '').trim()

        try{
            const data = jwt.verify(token, secret)
            
            const { id } = data as TokenPayload

            req.userId = id
        } catch{
            return res.send(401).json({messae: 'Sem token informado'})
        }

        next()
}