import { IList } from '../interfaces/IKanban';
import { IListCreate } from '../interfaces/IListRepository';
import List from '../models/List';

class ListRepository {
  public async createList({ kanbanId, name }: IListCreate): Promise<IList> {
    const list = await List.create({ kanbanId, name });

    return list;
  }
}

export default ListRepository;
