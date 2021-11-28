import { IList } from '../interfaces/IKanban';
import { IListCreate } from '../interfaces/IListRepository';
import List from '../models/List';
import AppError from '@errors/AppError';

class ListRepository {
  public async createList({ kanbanId, name }: IListCreate): Promise<IList> {
    const list = await List.create({ kanbanId, name });

    return list;
  }

  public async findById(id: string): Promise<IList> {
    const list = await List.findOne({ _id: id });

    if (!list) {
      throw new AppError("List doesn't exists.");
    }

    return list;
  }
}

export default ListRepository;
