import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    BaseEntity,
    Unique,
  } from 'typeorm';

import { User } from './User';
    
@Entity()
@Unique(["date", "name", "countryCode", "user"])
export class Holiday extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column({ type: 'date' })
	date!: Date;

	@Column({ length: 100 })
	localName!: string;

	@Column({ length: 100 })
	name!: string;

	@Column({ length: 10 })
	countryCode!: string;

	@ManyToOne(() => User, (user) => user.calendar, { nullable: false })
	user!: User;
}