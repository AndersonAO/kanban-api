import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ShowUserService from '../services/ShowUserService';

interface IRequestCreate {
  name: string;
  username: string;
  password: string;
}

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, username, password } = request.body as IRequestCreate;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, username, password });

    return response.status(201).json(user);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    const showUser = new ShowUserService();

    const user = await showUser.execute(id);

    return response.status(200).json(user);
  }
}

export default UsersController;
