import {Router} from 'express'
import { deleteClientes, getClientes, patchClientes, postClientes, putClientes } from '../clientes.controllers.js'
const router = Router()
router.get('/clientes',getClientes)

    router.get('/clientes/:id',getClientes)

    router.post('/clientes',postClientes)

      router.put('/clientes/:id',putClientes)

      router.patch('/clientes/:id',patchClientes)

      router.delete('/clientes/:id',deleteClientes)
      
      export default router