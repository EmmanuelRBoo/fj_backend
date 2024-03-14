import { query } from '../../db'

export const deleteClienteModel = async (id: string) => {
    const q = 'DELETE FROM clientes WHERE id = $1'

    await query(q, [id])
}