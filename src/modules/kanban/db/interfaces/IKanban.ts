import { Types, Document } from 'mongoose';

interface IComment {
  user_id: Types.ObjectId | undefined;
  comment: string;
}

interface ICard {
  listId: Types.ObjectId | undefined;
  name: string;
  description: string;
  comments: IComment[];
}

interface IList {
  kanbanId: Types.ObjectId | undefined;
  name: string;
  cards: ICard[];
}

interface IKanban extends Document {
  userId: Types.ObjectId | undefined;
  lists: IList[];
}

export { IKanban, IList, ICard, IComment };
