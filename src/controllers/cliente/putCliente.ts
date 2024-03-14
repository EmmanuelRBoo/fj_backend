import { Request, Response } from 'express'
import { putClienteService } from '../../services/cliente/putCliente'

export const putClienteController = async (req: Request, res: Response) => {
    const { email, nome, telefone, endereco } = req.body
    const { id } = req.params
    
    try {
        await putClienteService({ id, email, nome, telefone, endereco })

        return res.status(200).send('Dados do cliente atualizados com sucesso')
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor no controller' + e)
    }
}