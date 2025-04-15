import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const { name, email } = req.body;
		const result = await userService.createUser(name, email);
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
};

export const addHolidaysToCalendar = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const { userId } = req.params;
		const { countryCode, year, holidays } = req.body;
		const result = await userService.addHolidays(userId, countryCode, year, holidays);
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
};