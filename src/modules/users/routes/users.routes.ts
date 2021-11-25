import AUTH from '@shared/http/middlewares/auth';
import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import UserValidations from '../validations/UserValidations';

const usersRoutes = Router();

const usersController = new UsersController();
const validate = new UserValidations();

usersRoutes.post('/', validate.create, usersController.create);
usersRoutes.get('/:id', AUTH, validate.show, usersController.show);

export default usersRoutes;
