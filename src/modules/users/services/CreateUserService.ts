import { hash } from 'bcryptjs';

import User, { IUser } from '../db/models/User';
import UserRepository from '../db/repositories/UserRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  password: string;
  username: string;
}

class CreateUserService {
  public async execute({ name, username, password }: IRequest): Promise<IUser> {
    const userRepository = new UserRepository();
    const userExists = await userRepository.findByUsername(username);

    if (userExists) {
      throw new AppError('User already exists.');
    }

    password = await hash(password, 10);

    const user = await User.create({ name, username, password });

    return user;
  }
}

export default CreateUserService;
