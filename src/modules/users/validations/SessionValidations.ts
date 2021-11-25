import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response, NextFunction } from 'express';

class SessionValidations {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    celebrate({
      [Segments.BODY]: {
        password: Joi.string().min(4).max(12).required(),
        username: Joi.string().required(),
      },
    })(request, response, next);
  }
}

export default SessionValidations;
