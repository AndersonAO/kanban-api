import { Router } from 'express';
import AUTH from '@shared/http/middlewares/auth';
import CardsController from '../controllers/CardsController';

const cardRoutes = Router();

const cardsController = new CardsController();

cardRoutes.use(AUTH);

cardRoutes.post('/', cardsController.create);
cardRoutes.delete('/:id', cardsController.delete);
cardRoutes.put('/:id', cardsController.update);

export default cardRoutes;
