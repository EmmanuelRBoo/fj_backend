import { query } from '../../db'
import { ICreateCliente } from '../../interfaces/cliente'

export const createClienteModel = async ({ email, nome, telefone, endereco }: ICreateCliente) => {
    const q = `
        INSERT INTO clientes (nome, email, telefone, endereco)
        VALUES($1, $2, $3, $4)
    `

    await query(q, [nome, email, telefone, endereco])
}