import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import AppError from '../../../shared/errors/AppError';
import { IUser } from '../db/models/User';
import UserRepository from '../db/repositories/UserRepository';
import authConfig from '@config/auth';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: IUser;
  token: string;
}

class CreateSessionsService {
  public async execute({ username, password }: IRequest): Promise<IResponse> {
    const usersRepository = new UserRepository();
    const user = await usersRepository.findByUsername(username);

    if (!user) {
      throw new AppError('Incorrect username/password combination', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect username/password combination', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    user.password = '';

    return {
      user,
      token,
    };
  }
}

export default CreateSessionsService;
