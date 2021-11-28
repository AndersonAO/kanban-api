import { ICard } from '../db/interfaces/IKanban';
import CardRepository from '../db/repositories/CardRepository';
import ListRepository from '../db/repositories/ListRepository';

interface IRequest {
  name: string;
  description: string;
  listId: string;
}

class CreateCardService {
  public async execute({
    name,
    description,
    listId,
  }: IRequest): Promise<ICard> {
    const cardRepository = new CardRepository();
    const listRepository = new ListRepository();

    const list = await listRepository.findById(listId);

    const card = await cardRepository.createCard({
      name,
      description,
      listId,
    });

    list.cards.push(card);

    await list.save();

    return card;
  }
}

export default CreateCardService;
