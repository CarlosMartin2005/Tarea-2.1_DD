import { Router } from 'express';
import { TareaController } from '../controllers/tarea-controller.js';

const tareasRouter = Router()

tareasRouter.get('/', TareaController.getTareas)

tareasRouter.get('/:id', TareaController.getTareaporId)

tareasRouter.post('/', TareaController.createTarea)

tareasRouter.patch('/:id', TareaController.updateTarea)

tareasRouter.delete('/:id', TareaController.deleteTarea)

export default tareasRouter