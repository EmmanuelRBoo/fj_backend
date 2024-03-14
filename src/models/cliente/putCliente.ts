import { query } from '../../db'
import { IPutCliente } from '../../interfaces/cliente'

export const putClienteModel = async ({ email, nome, telefone, endereco, id }: IPutCliente) => {
    const q = `
        UPDATE clientes
        SET nome = COALESCE($1, nome), 
        email = COALESCE($2, email),
        telefone = COALESCE($3, telefone),
        endereco = COALESCE($4, endereco),
        updated_at = current_timestamp
        WHERE id = $5
    `

    await query(q, [nome, email, telefone, endereco, id])
}