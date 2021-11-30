import { ICard } from '../db/interfaces/IKanban';
import CardRepository from '../db/repositories/CardRepository';

interface IRequest {
  name: string;
  description: string;
  cardId: string;
}

class UpdateCardService {
  public async execute({
    name,
    description,
    cardId,
  }: IRequest): Promise<ICard> {
    const cardRepository = new CardRepository();

    const card = await cardRepository.findById(cardId);

    (card.name = name), (card.description = description);

    card.save();

    return card;
  }
}

export default UpdateCardService;
