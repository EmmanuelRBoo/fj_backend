import { putClienteModel } from '../../models/cliente/putCliente'
import { IPutCliente } from '../../interfaces/cliente'

export const putClienteService = async (data: IPutCliente) => await putClienteModel(data)