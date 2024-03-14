import { Request, Response } from 'express'
import { createClienteService } from '../../services/cliente/createCliente'

export const createClienteController = async (req: Request, res: Response) => {
    const { email, nome, telefone, endereco } = req.body

    try {
        await createClienteService({ email, nome, telefone, endereco })

        return res.status(201).send('Cliente cadastrado com sucesso')
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor')
    }
}