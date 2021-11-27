import { Request, Response } from 'express';
import CreateListService from '../services/CreateListService';

export default class ListsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { kanbanId, name } = request.body;

    const createList = new CreateListService();

    const list = await createList.execute({
      userId: request.user.id,
      kanbanId,
      name,
    });

    return response.json(list);
  }
}
