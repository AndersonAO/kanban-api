import { Router } from 'express';
import KanbansController from '../kanban/controllers/KanbansController';
import AUTH from '@shared/http/middlewares/auth';

const kanbanRoutes = Router();

const kanbanController = new KanbansController();

kanbanRoutes.use(AUTH);

kanbanRoutes.post('/', kanbanController.create);
kanbanRoutes.get('/', kanbanController.list);

export default kanbanRoutes;
