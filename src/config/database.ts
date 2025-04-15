import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../entities/User';
import { Holiday } from '../entities/Holiday';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Holiday],
});