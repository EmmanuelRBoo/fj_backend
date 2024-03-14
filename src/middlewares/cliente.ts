import { Request, Response, NextFunction } from 'express'
import { getClienteByIdService } from '../services/cliente/getClienteById'
import { getClienteByEmailService } from '../services/cliente/getClienteByEmail'

const error = (res: Response) => res.status(500).send('Houve um erro no servidor')

export const isClienteAlreadyExist = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body
    
    try {
        const user = await getClienteByEmailService(email)

        if (user) {
            return res.status(401).send('Email já cadastrado')
        }

        return next()
    } catch (e) {
        error(res)
    }
}

export const isClienteNotExist = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    
    try {
        const user = await getClienteByIdService(id)

        if (!user.id) {
            return res.status(401).send('Email não cadastrado')
        }

        return next()
    } catch (e) {
        error(res)
    }
}

export const isCorrectData = async (req: Request, res: Response, next: NextFunction) => {
    const { email, endereco, nome } = req.body

    try {
        switch (true) {
            case !email: return res.status(401).send('Por favor insira um email válido')
            case !nome: return res.status(401).send('Por favor insira um nome válido')
            case !endereco.rua: return res.status(401).send('Por favor insira um endereço válido')
            default: return next()
        }
    } catch (e) {
        error(res)
    }
}