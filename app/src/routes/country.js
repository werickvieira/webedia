import express from 'express';
import countryHandler from '../handlers/countryHandler';

const country = express.Router();
country.use(express.static('public'));
country.get('/:countrySigle/:pageSize?/:page?', countryHandler);

export default country;
