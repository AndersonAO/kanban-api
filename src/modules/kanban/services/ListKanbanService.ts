import { IKanban } from '../db/interfaces/IKanban';
import KanbanRepository from '../db/repositories/KanbanRepository';

class ListKanbanService {
  public async execute(userId: string): Promise<IKanban[]> {
    const kanbanRepository = new KanbanRepository();

    const kanbans = await kanbanRepository.findAllByUserId(userId);

    return kanbans;
  }
}

export default ListKanbanService;
