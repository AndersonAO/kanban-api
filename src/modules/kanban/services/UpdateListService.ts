import ListRepository from '../db/repositories/ListRepository';
import KanbanRepository from '../db/repositories/KanbanRepository';
import AppError from '@errors/AppError';
import { IList } from '../db/interfaces/IKanban';

interface IRequest {
  name: string;
  userId: string;
  listId: string;
}

class UpdateListService {
  public async execute({ name, listId, userId }: IRequest): Promise<IList> {
    const listRepository = new ListRepository();
    const kanbanRepository = new KanbanRepository();

    const list = await listRepository.findById(listId);

    const kanban = await kanbanRepository.findById({
      id: String(list.kanbanId),
    });

    if (String(kanban.userId) !== userId) {
      throw new AppError('Você não tem permissão.');
    }

    list.name = name;

    await list.save();

    return list;
  }
}

export default UpdateListService;
