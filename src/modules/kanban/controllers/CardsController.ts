import { Request, Response } from 'express';
import CreateCardService from '../services/CreateCardService';

export default class CardsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { listId, name, description } = request.body;

    const createCard = new CreateCardService();

    const card = await createCard.execute({
      description,
      listId,
      name,
    });

    return response.json(card);
  }
}
