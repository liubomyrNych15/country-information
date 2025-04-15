import { Request, Response, NextFunction } from 'express';

import * as countryService from '../services/country.service';

export const getAvailableCountries = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const countries = await countryService.fetchAvailableCountries();
		res.status(200).json(countries);
	} catch (error) {
		next(error);
	}
};

export const getCountryInfo = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const { countryCode } = req.params;
		const info = await countryService.getCountryInfo(countryCode);
		res.status(200).json(info);
	} catch (error) {
		next(error);
	}
};
