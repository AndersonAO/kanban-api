import CardRepository from '../db/repositories/CardRepository';
import ListRepository from '../db/repositories/ListRepository';

interface IRequest {
  cardId: string;
}

class DeleteCardService {
  public async execute({ cardId }: IRequest): Promise<void> {
    const cardRepository = new CardRepository();
    const listRepository = new ListRepository();
    const card = await cardRepository.findById(cardId);

    const list = await listRepository.findById(String(card.listId));

    const cardIndex = list.cards.findIndex(card => String(card) === cardId);

    list.cards.splice(cardIndex, 1);

    await card.delete();

    await list.save();
  }
}

export default DeleteCardService;
