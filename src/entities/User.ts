import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    BaseEntity,
  } from 'typeorm';

import { Holiday } from './Holiday';
  
@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column({ length: 100 })
	name!: string;

	@Column({ unique: true, length: 100 })
	email!: string;

	@OneToMany(() => Holiday, (holiday) => holiday.user, { cascade: true })
	calendar!: Holiday[];
}