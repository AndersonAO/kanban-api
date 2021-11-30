import { IList } from '../db/interfaces/IKanban';
import ListRepository from '../db/repositories/ListRepository';
import KanbanRepository from '../db/repositories/KanbanRepository';
import AppError from '@errors/AppError';

interface IRequest {
  kanbanId: string;
  name: string;
  userId: string;
}

class CreateListService {
  public async execute({ kanbanId, name, userId }: IRequest): Promise<IList> {
    const listRepository = new ListRepository();
    const kanbanRepository = new KanbanRepository();

    const kanban = await kanbanRepository.findById({ id: kanbanId });

    if (String(kanban.userId) !== userId) {
      throw new AppError('Você não possui permissão.');
    }

    const list = await listRepository.createList({ kanbanId, name });

    kanban.lists.push(list);
    kanban.save();

    return list;
  }
}

export default CreateListService;
