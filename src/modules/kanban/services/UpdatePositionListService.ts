import KanbanRepository from '../db/repositories/KanbanRepository';
import ListRepository from '../db/repositories/ListRepository';
import AppError from '@errors/AppError';
import { IKanban, IList } from '../db/interfaces/IKanban';
import CardRepository from '../db/repositories/CardRepository';

interface IRequest {
  userId: string;
  kanbanId: string;
  lists: IList[];
}

class UpdatePositionListService {
  public async execute({
    lists,
    kanbanId,
    userId,
  }: IRequest): Promise<IKanban> {
    const kanbanRepository = new KanbanRepository();
    const listRepository = new ListRepository();
    const cardRepository = new CardRepository();

    const kanban = await kanbanRepository.findById({
      id: kanbanId,
    });

    if (String(kanban.userId) !== userId) {
      throw new AppError('Você não tem permissão.');
    }

    await kanban.populate([
      {
        path: 'lists',
        model: 'List',
        populate: {
          path: 'cards',
          model: 'Card',
        },
      },
    ]);

    kanban.lists = lists;

    for (const list of lists) {
      const listDb = await listRepository.findById(list._id);

      if (!listDb) {
        throw new AppError(`Lista "${list._id}" não encontrada.`);
      }

      listDb.cards = list.cards;

      for (const card of list.cards) {
        const cardDb = await cardRepository.findById(card._id);

        cardDb.listId = card.listId;
      }

      await listDb.save();
    }

    await kanban.save();

    return kanban;
  }
}

export default UpdatePositionListService;
