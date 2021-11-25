import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';

import MongoConnect from '@config/db/MongoConnect';
import router from './routes/index';
import AppError from '@shared/errors/AppError';

const app = express();
const db = new MongoConnect();

app.use(express.json());

app.use(router);

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });

    next();
  },
);

app.listen(process.env.PORT, () => {
  console.log(`Server connected on port: ${process.env.PORT}`);
  db.connect();
});
