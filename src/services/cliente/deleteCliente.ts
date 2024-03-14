import { deleteClienteModel } from '../../models/cliente/deleteCliente'

export const deleteClienteService = async (id: string) => await deleteClienteModel(id)