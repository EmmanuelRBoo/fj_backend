import { createClienteModel } from '../../models/cliente/createCliente'
import { ICreateCliente } from '../../interfaces/cliente'

export const createClienteService = async (data: ICreateCliente) => await createClienteModel(data)