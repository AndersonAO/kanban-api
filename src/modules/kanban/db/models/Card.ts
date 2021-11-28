import { Schema, model, Types } from 'mongoose';
import { ICard } from '../interfaces/IKanban';

const CardSchema = new Schema<ICard>(
  {
    listId: { type: Types.ObjectId, ref: 'List' },
    name: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true },
);

const Card = model('Card', CardSchema);

export default Card;
