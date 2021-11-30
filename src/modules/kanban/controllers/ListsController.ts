import { Request, Response } from 'express';
import CreateListService from '../services/CreateListService';
import UpdateListService from '../services/UpdateListService';
import UpdatePositionListService from '../services/UpdatePositionListService';
import DeleteListService from '../services/DeleteListService';

export default class ListsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { kanbanId, name } = request.body;

    if (!name) {
      return response.status(400).json({
        message: 'Você precisa inserir um título para a lista.',
      });
    }

    const createList = new CreateListService();

    const list = await createList.execute({
      userId: request.user.id,
      kanbanId,
      name,
    });

    return response.json(list);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { listId } = request.params;

    const updateList = new UpdateListService();

    const list = await updateList.execute({
      userId: request.user.id,
      listId,
      name,
    });

    return response.json(list);
  }

  public async updatePositions(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { lists } = request.body;
    const { kanbanId } = request.params;

    const updatePositionList = new UpdatePositionListService();

    const kanban = await updatePositionList.execute({
      userId: request.user.id,
      kanbanId,
      lists,
    });

    return response.json(kanban);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteList = new DeleteListService();

    await deleteList.execute({ listId: id });

    return response.status(204).json();
  }
}
