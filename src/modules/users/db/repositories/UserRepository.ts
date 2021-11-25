import User, { IUser } from '../models/User';

class UserRepository extends User {
  public async findByUsername(username: string): Promise<IUser | null> {
    const user = await User.findOne({ username });

    return user;
  }
}

export default UserRepository;
