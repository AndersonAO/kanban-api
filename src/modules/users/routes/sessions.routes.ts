import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';
import SessionValidations from '../validations/SessionValidations';

const sessionsRoutes = Router();

const sessionsController = new SessionsController();
const validate = new SessionValidations();

sessionsRoutes.post('/', validate.create, sessionsController.create);

export default sessionsRoutes;
