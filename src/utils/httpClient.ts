import axios, { AxiosRequestConfig } from 'axios';

export const httpClient = async (url: string, options?: AxiosRequestConfig) => {
	try {
		const response = await axios({
			url,
			...options,
		});

		return response.data;
	} catch (error) {
		throw error;
	}
};