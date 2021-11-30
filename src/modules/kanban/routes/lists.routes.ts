import { Router } from 'express';
import AUTH from '@shared/http/middlewares/auth';
import ListsController from '../controllers/ListsController';

const listRoutes = Router();

const listsController = new ListsController();

listRoutes.use(AUTH);

listRoutes.post('/', listsController.create);
listRoutes.delete('/:id', listsController.delete);
listRoutes.patch('/:listId', listsController.update);
listRoutes.put('/positions/:kanbanId', listsController.updatePositions);

export default listRoutes;
