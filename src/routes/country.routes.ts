import { Router } from 'express';
import { getAvailableCountries, getCountryInfo } from '../controllers/country.controller';


const router = Router();

router.get('/', getAvailableCountries);
router.get('/:countryCode/info', getCountryInfo);

export default router;