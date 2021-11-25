import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response, NextFunction } from 'express';

class UserValidations {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        password: Joi.string().min(4).max(12).required(),
        username: Joi.string().required(),
      },
    })(request, response, next);
  }

  public async show(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    })(request, response, next);
  }
}

export default UserValidations;
