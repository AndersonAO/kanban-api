import { ICard } from '../interfaces/IKanban';
import Card from '../models/Card';
import { ICreateCard } from '../interfaces/ICardRepository';

class CardRepository {
  public async createCard({
    listId,
    name,
    description,
  }: ICreateCard): Promise<ICard> {
    const card = new Card({
      listId,
      name,
      description,
    });

    await card.save();
    return card;
  }

  public async findAllByListId() {
    return;
  }
}

export default CardRepository;
