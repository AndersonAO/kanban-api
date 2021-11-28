import User, { IUser } from '../models/User';
import AppError from '@errors/AppError';

class UserRepository extends User {
  public async findByUsername(username: string): Promise<IUser | null> {
    const user = await User.findOne({ username });

    return user;
  }

  public async findById(id: string): Promise<IUser> {
    const user = await User.findOne({ _id: id });

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}

export default UserRepository;
