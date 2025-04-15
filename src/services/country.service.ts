import { httpClient } from '../utils/httpClient';

const NAGER_BASE_URL = process.env.NAGER_BASE_URL as string;
const COUNTRIES_NOW_BASE_URL = process.env.COUNTRIES_NOW_BASE_URL as string;

export const fetchAvailableCountries = async () => {
    const url = `${NAGER_BASE_URL}/AvailableCountries`;
    return await httpClient(url);
};

export const getCountryInfo = async (countryCode: string) => {
    const countryInfoUrl = `${NAGER_BASE_URL}/CountryInfo/${countryCode}`;
    const countryInfo = await httpClient(countryInfoUrl);
  
    if (!countryInfo) {
        throw new Error('Country with this code does not exists!');
    }
  
    const populationUrl = `${COUNTRIES_NOW_BASE_URL}/countries/population`;
    const populationResponse = await httpClient(populationUrl, {
        method: 'POST',
        data: { country: countryInfo.officialName },
    });
  
    const flagUrl = `${COUNTRIES_NOW_BASE_URL}/countries/flag/images`;
    const flagResponse = await httpClient(flagUrl, {
        method: 'POST',
        data: { country: countryInfo.officialName },
    });
  
    return {
        ...countryInfo,
        population: populationResponse.data.populationCounts,
        flag: flagResponse.data.flag
    };
};