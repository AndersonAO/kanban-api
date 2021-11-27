import { IKanban } from '../db/interfaces/IKanban';
import KanbanRepository from '../db/repositories/KanbanRepository';
import UserRepository from '../../users/db/repositories/UserRepository';

interface IRequest {
  userId: string;
}

class CreateKanbanService {
  public async execute({ userId }: IRequest): Promise<IKanban> {
    const kanbanRepository = new KanbanRepository();
    const userRepository = new UserRepository();

    const user = await userRepository.findById(userId);

    const kanban = await kanbanRepository.createKanban({ userId });

    user.kanbanId = kanban._id;
    await user.save();

    return kanban;
  }
}

export default CreateKanbanService;
