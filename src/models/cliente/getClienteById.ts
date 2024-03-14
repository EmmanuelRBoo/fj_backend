import { query } from '../../db'

export const getClienteByIdModel = async (id: string) => {
    const q = 'SELECT id FROM clientes WHERE id = $1'

    const data = await query(q, [id])

    return data.rows[0]
}