import Kanban from '../models/Kanban';
import { IKanban } from '../interfaces/IKanban';
import AppError from '@errors/AppError';
import {
  ICreateKanban,
  IDeleteKanban,
  IFindByIdKanban,
  IFindByUserIdKanban,
} from '../interfaces/IKanbanRepository';

class KanbanRepository {
  public async findByUserId({
    userId,
  }: IFindByUserIdKanban): Promise<IKanban | null> {
    const kanban = await Kanban.findOne({ userId }).populate([
      {
        path: 'lists',
        model: 'List',
        populate: {
          path: 'cards',
          model: 'Card',
        },
      },
    ]);

    return kanban;
  }

  public async createKanban({ userId }: ICreateKanban): Promise<IKanban> {
    const kanbanExists = await this.findByUserId({ userId });

    if (kanbanExists) {
      throw new AppError('You already have a kanban board.');
    }

    const kanban = await Kanban.create({ userId });

    return kanban;
  }

  public async findById({ id }: IFindByIdKanban): Promise<IKanban> {
    const kanban = await Kanban.findOne({ _id: id });

    if (!kanban) {
      throw new AppError("Kanban doesn't exists.");
    }

    return kanban;
  }

  public async findAllByUserId(userId: string): Promise<IKanban[]> {
    const kanban = await Kanban.find({ userId }).populate([
      {
        path: 'lists',
        model: 'List',
        populate: {
          path: 'cards',
          model: 'Card',
        },
      },
    ]);

    return kanban;
  }

  public async deleteKanban({
    kanbanId,
    userId,
  }: IDeleteKanban): Promise<void> {
    const deleted = await Kanban.findOneAndDelete({ userId, kanbanId });

    if (!deleted) {
      throw new AppError(
        "Kanban not exists or you don't have permission to delete this.",
      );
    }
  }
}

export default KanbanRepository;
