import { Request, Response } from 'express'
import { getAllClienteService } from '../../services/cliente/getAllCliente'

export const getAllClienteController = async (_req: Request, res: Response) => {
    try {
        const data = await getAllClienteService()
        const message = 'Clientes carregados com sucesso'

        return res.status(200).json({ data, message })
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor')
    }
}