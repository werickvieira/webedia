import express from 'express';
import postSearchHandler from '../handlers/searchHandler';

const search = express.Router();
search.post('/:q/:pageSize?/:page?', postSearchHandler);

export default search;
