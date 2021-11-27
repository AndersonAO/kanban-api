import { Router } from 'express';
import usersRoutes from '@modules/users/routes/users.routes';
import sessionsRoutes from '@modules/users/routes/sessions.routes';
import kanbanRoutes from '@modules/routes/kanbans.routes';
import listRoutes from '../../../modules/routes/lists.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);
router.use('/kanbans', kanbanRoutes);
router.use('/lists', listRoutes);

export default router;
