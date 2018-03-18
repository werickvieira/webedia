import express from 'express';
import getCountryHandler from '../handlers/countryHandler';
import getHeadLineHandler from '../handlers/headLineHandler';

const country = express.Router();
country.get('/country/:countrySigle/:pageSize?/:page?', getCountryHandler);
country.get('/headline/:singleParam?/:pageSize?/:page?', getHeadLineHandler);

export default country;

