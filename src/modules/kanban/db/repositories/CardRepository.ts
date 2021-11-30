import { ICard } from '../interfaces/IKanban';
import Card from '../models/Card';
import { ICreateCard } from '../interfaces/ICardRepository';
import AppError from '@errors/AppError';

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

  public async findById(_id: string): Promise<ICard> {
    const card = await Card.findOne({ _id });

    if (!card) {
      throw new AppError(`Card "${_id}" not found.`);
    }

    return card;
  }

  public async deleteByListId(listId: string): Promise<void> {
    await Card.deleteMany({ listId });
  }
}

export default CardRepository;
