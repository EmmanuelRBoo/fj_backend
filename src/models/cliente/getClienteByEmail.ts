import { query } from '../../db'

export const getClienteByEmailModel = async (email: string) => {
    const q = 'SELECT id FROM clientes WHERE email = $1'

    const data = await query(q, [email])

    return data.rows[0]
}