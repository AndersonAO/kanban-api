import { Types, Document } from 'mongoose';

interface ICard extends Document {
  listId: Types.ObjectId | undefined;
  name: string;
  description?: string;
}

interface IList extends Document {
  kanbanId: Types.ObjectId | undefined;
  name: string;
  cards: ICard[];
}

interface IKanban extends Document {
  userId: Types.ObjectId | undefined;
  lists: IList[];
}

export { IKanban, IList, ICard };
