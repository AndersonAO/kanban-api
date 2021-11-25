import { Router } from 'express';
import usersRoutes from '../../../modules/users/routes/users.routes';

const router = Router();

router.use('/users', usersRoutes);

export default router;
