import { Router } from 'express';
import usersRoutes from '../../../modules/users/routes/users.routes';
import sessionsRoutes from '../../../modules/users/routes/sessions.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);

export default router;
