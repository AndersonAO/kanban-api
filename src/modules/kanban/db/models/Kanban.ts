import { Schema, model, Types } from 'mongoose';
import { IKanban } from '../interfaces/IKanban';

const KanbanSchema = new Schema<IKanban>(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true, unique: true },
    lists: [{ type: Types.ObjectId, ref: 'List' }],
  },
  { timestamps: true },
);

const Kanban = model('Kanban', KanbanSchema);

export default Kanban;
