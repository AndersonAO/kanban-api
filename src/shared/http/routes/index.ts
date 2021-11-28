import { Router } from 'express';
import usersRoutes from '@modules/users/routes/users.routes';
import sessionsRoutes from '@modules/users/routes/sessions.routes';
import kanbanRoutes from '@modules/kanban/routes/kanbans.routes';
import listRoutes from '../../../modules/kanban/routes/lists.routes';
import cardRoutes from '../../../modules/kanban/routes/cards.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);
router.use('/kanbans', kanbanRoutes);
router.use('/lists', listRoutes);
router.use('/cards', cardRoutes);

export default router;
