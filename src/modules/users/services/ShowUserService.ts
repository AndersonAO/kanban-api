import User, { IUser } from '../db/models/User';
import AppError from '../../../shared/errors/AppError';

class ShowUserService {
  public async execute(id: string): Promise<IUser> {
    const user = await User.findOne({ id });

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    user.password = '';

    return user;
  }
}

export default ShowUserService;
