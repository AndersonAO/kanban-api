import { Request, Response } from 'express';
import CreateCardService from '../services/CreateCardService';
import DeleteCardService from '../services/DeleteCardService';
import UpdateCardService from '../services/UpdateCardService';

export default class CardsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { listId, name, description } = request.body;

    if (!name) {
      return response.status(400).json({
        message: 'Você precisa inserir um título para o cartão.',
      });
    }

    const createCard = new CreateCardService();

    const card = await createCard.execute({
      description,
      listId,
      name,
    });

    return response.json(card);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCard = new DeleteCardService();

    await deleteCard.execute({ cardId: id });

    return response.status(204).json();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    const updateCard = new UpdateCardService();

    const card = await updateCard.execute({ name, description, cardId: id });

    return response.status(200).json(card);
  }
}
