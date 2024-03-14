import { Router } from 'express'
import { isClienteAlreadyExist, isClienteNotExist, isCorrectData } from '../middlewares/cliente'
import clienteController from '../controllers/cliente'

const clienteRouter = Router()

clienteRouter.get('/',
    clienteController.getAllClienteController
)

clienteRouter.post('/',
    isClienteAlreadyExist,
    isCorrectData,
    clienteController.createClienteController
)

clienteRouter.put('/:id',
    isClienteNotExist,
    clienteController.putClienteController
)   

clienteRouter.delete('/:id',
    isClienteNotExist,
    clienteController.deleteClienteController
)

export { clienteRouter }