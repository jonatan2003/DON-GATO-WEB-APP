import { Router } from 'express';
import {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
} from '../../controllers/oldscontrollers/clientes';

const ClientesRouter = Router();

ClientesRouter.post('/', createCliente); // Crear un nuevo cliente
ClientesRouter.get('/', getClientes); // Obtener la lista de clientes
ClientesRouter.get('/:idCliente', getClienteById); // Obtener un cliente por ID
ClientesRouter.put('/:idCliente', updateCliente); // Actualizar un cliente por ID
ClientesRouter.delete('/:idCliente', deleteCliente); // Eliminar un cliente por ID

export default ClientesRouter;
