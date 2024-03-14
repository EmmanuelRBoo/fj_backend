import { query } from '../../db'

export const getAllClienteModel = async () => {
    const q = 'SELECT id, email, nome, telefone, endereco FROM clientes'

    const data = await query(q, [])

    return data.rows
}