import { Request, Response } from 'express'
import { deleteClienteService } from '../../services/cliente/deleteCliente'

export const deleteClienteController = async (req: Request, res: Response) => {
    const { id } = req.params
    
    try {
        await deleteClienteService(id)

        return res.status(204).send('Cliente deletado com sucesso')
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor')
    }
}