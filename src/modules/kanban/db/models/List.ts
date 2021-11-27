import { Schema, model, Types } from 'mongoose';
import { IList } from '../interfaces/IKanban';

const ListSchema = new Schema<IList>(
  {
    kanbanId: { type: Types.ObjectId, ref: 'Kanban', required: true },
    name: { type: String, required: true },
    cards: [{ type: Types.ObjectId, ref: 'Card' }],
  },
  { timestamps: true },
);

const List = model('List', ListSchema);

export default List;
