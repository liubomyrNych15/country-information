import { User } from '../entities/User';
import { Holiday } from '../entities/Holiday';
import { httpClient } from '../utils/httpClient';
import { PublicHoliday } from '../interfaces/public-holiday.interface';

const NAGER_BASE_URL = process.env.NAGER_BASE_URL as string;

export const createUser = async (name: string, email: string) => {
	const existingUser = await User.findOne({ where: { email } });
	if (existingUser) throw new Error('User with that email already exists.');
	
	const user = new User();
	user.name = name;
	user.email = email;
	await user.save();
	
	return user;
};

export const addHolidays = async (
	userId: string,
	countryCode: string,
	year: number,
	requestedHolidays: string[],
) => {
	const user = await User.findOne({
		where: { id: userId },
		relations: ['calendar'],
	});

	if (!user) throw new Error('User not found');

	const holidaysUrl = `${NAGER_BASE_URL}/PublicHolidays/${year}/${countryCode}`;
	
	const fetchedHolidays: PublicHoliday[] = await httpClient(holidaysUrl);
	
	const matchedHolidays: PublicHoliday[] = [];
	for (const reqHoliday of requestedHolidays) {
		const found = fetchedHolidays.find(
		(holiday) =>
			holiday.name.toLowerCase() === reqHoliday.toLowerCase() ||
			holiday.localName.toLowerCase() === reqHoliday.toLowerCase()
		);
		if (!found) {
			const error: any = new Error(`Invalid holiday provided: ${reqHoliday}`);
			error.status = 400;
			throw error;
		}
		matchedHolidays.push(found);
	}
	
	const newHolidayEntities: Holiday[] = matchedHolidays.reduce((acc: Holiday[], holiday) => {
		const alreadyExists = user.calendar.some((h) => {
			return (
				h.name.toLowerCase() === holiday.name.toLowerCase() &&
				new Date(h.date).toISOString() === new Date(holiday.date).toISOString() &&
				h.countryCode.toUpperCase() === holiday.countryCode.toUpperCase()
			);
		});
		
		if (!alreadyExists) {
			const newHoliday = new Holiday();
			newHoliday.date = new Date(holiday.date);
			newHoliday.localName = holiday.localName;
			newHoliday.name = holiday.name;
			newHoliday.countryCode = holiday.countryCode;
			newHoliday.user = user;
			acc.push(newHoliday);
		}
		return acc;
	}, []);
	
	if (newHolidayEntities.length > 0) await Holiday.save(newHolidayEntities);
	
	const updatedUser = await User.findOne({
		where: { id: userId },
		relations: ['calendar'],
	});
	
	return {
	  	holidays: updatedUser?.calendar,
	};
};