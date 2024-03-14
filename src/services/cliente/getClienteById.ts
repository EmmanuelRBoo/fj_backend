import { getClienteByIdModel } from '../../models/cliente/getClienteById'

export const getClienteByIdService = async (id: string) => await getClienteByIdModel(id)