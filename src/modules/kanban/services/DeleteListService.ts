import CardRepository from '../db/repositories/CardRepository';
import ListRepository from '../db/repositories/ListRepository';
import KanbanRepository from '../db/repositories/KanbanRepository';

interface IRequest {
  listId: string;
}

class DeleteListService {
  public async execute({ listId }: IRequest): Promise<void> {
    const cardRepository = new CardRepository();
    const listRepository = new ListRepository();
    const kanbanRepository = new KanbanRepository();

    const list = await listRepository.findById(listId);

    const kanban = await kanbanRepository.findById({
      id: String(list.kanbanId),
    });

    const listIndex = kanban.lists.findIndex(list => String(list) === listId);

    kanban.lists.splice(listIndex, 1);

    await cardRepository.deleteByListId(listId);

    await list.delete();

    await kanban.save();
  }
}

export default DeleteListService;
