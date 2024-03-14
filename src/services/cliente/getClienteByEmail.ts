import { getClienteByEmailModel } from '../../models/cliente/getClienteByEmail'

export const getClienteByEmailService = async (email: string) => await getClienteByEmailModel(email)