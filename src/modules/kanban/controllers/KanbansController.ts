import { Request, Response } from 'express';
import CreateKanbanService from '../services/CreateKanbanService';
import ListKanbanService from '../services/ListKanbanService';

export default class KanbansController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createKanban = new CreateKanbanService();

    const kanban = await createKanban.execute({
      userId: request.user.id,
    });

    return response.json(kanban);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listKanban = new ListKanbanService();

    const kanbans = await listKanban.execute(request.user.id);

    return response.json(kanbans);
  }
}
